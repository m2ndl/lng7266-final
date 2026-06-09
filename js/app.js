/* ───────────────────────────────────────────────────────────────
   app.js — Read Mode renderer for the LNG 7266 exam app.
   Reads window.EXAM (populated by store.js + data/*.js) and renders
   an exact-question browser with layered answers. No framework.
   Practice Mode and the mock-exam simulator are intentionally NOT
   built yet (Read Mode only).
   ─────────────────────────────────────────────────────────────── */
'use strict';

const SECTIONS = [
  { key: 'define',      label: 'Define',      total: '3 items · 7 pts',
    hint: '≈ 2–3 sentences. A precise definition, the key contrast, and a source anchor.' },
  { key: 'short_note',  label: 'Short Note',  total: '3 items · 15 pts',
    hint: '≈ one tight paragraph (~5 pts each). Name the components, then explain.' },
  { key: 'application', label: 'Application', total: '4 items · 18 pts',
    hint: 'Staged plan: name the Saudi problem + evidence → framework + construct → 3 steps with justification → outcome / assessment.' },
];

const SUPPORT = {
  supported:   { label: 'Source-verified', cls: 'sup-ok' },
  partial:     { label: 'Partial · flagged', cls: 'sup-partial' },
  unsupported: { label: 'Unsupported', cls: 'sup-flag' },
};

const state = { activeTopic: null, search: '' };

/* ── utilities ───────────────────────────────────────────────── */
function el(id) { return document.getElementById(id); }
function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
  ));
}
function highlight(html, term) {
  if (!term) return html;
  // Highlight only in text nodes, never inside tags.
  const re = new RegExp('(' + term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
  return html.replace(/>([^<]+)</g, (m, txt) =>
    '>' + txt.replace(re, '<mark>$1</mark>') + '<');
}

/* ── init ────────────────────────────────────────────────────── */
function init() {
  buildSidebar();
  el('search-input').addEventListener('input', e => {
    state.search = e.target.value.trim();
    el('search-clear').classList.toggle('hidden', !state.search);
    if (state.search) renderSearch(); else renderTopic(state.activeTopic);
  });
  el('search-clear').addEventListener('click', () => {
    state.search = ''; el('search-input').value = '';
    el('search-clear').classList.add('hidden');
    renderTopic(state.activeTopic);
  });
  el('btn-theme').addEventListener('click', toggleTheme);
  el('btn-print').addEventListener('click', () => window.print());
  el('hamburger').addEventListener('click', toggleSidebar);
  el('sidebar-overlay').addEventListener('click', closeSidebar);
  window.addEventListener('scroll', updateProgressStripe, { passive: true });

  // Open the populated pilot topic first; else the first topic.
  const pilot = EXAM.topics.find(t => EXAM.isPopulated(t.id)) || EXAM.topics[0];
  renderTopic(pilot ? pilot.id : null);
}

/* ── sidebar ─────────────────────────────────────────────────── */
function buildSidebar() {
  const nav = el('topic-nav');
  nav.innerHTML = '';
  EXAM.topics.slice().sort((a, b) => a.order - b.order).forEach(t => {
    const populated = EXAM.isPopulated(t.id);
    const a = document.createElement('button');
    a.className = 'nav-topic' + (t.id === state.activeTopic ? ' active' : '');
    a.dataset.topic = t.id;
    a.innerHTML = `
      <span class="nav-topic-name">${escapeHtml(t.name)}</span>
      <span class="nav-topic-meta">${escapeHtml(t.chapter.split('—')[0].trim())}</span>
      ${populated ? '<span class="nav-tag pilot">ready</span>'
                  : '<span class="nav-tag soon">soon</span>'}
    `;
    a.addEventListener('click', () => { renderTopic(t.id); closeSidebar(); });
    nav.appendChild(a);
  });
}

/* ── topic view ──────────────────────────────────────────────── */
function renderTopic(id) {
  if (!id) return;
  state.activeTopic = id;
  state.search = ''; el('search-input').value = '';
  el('search-clear').classList.add('hidden');
  el('search-results').classList.add('hidden');
  el('topic-view').classList.remove('hidden');

  document.querySelectorAll('.nav-topic').forEach(n =>
    n.classList.toggle('active', n.dataset.topic === id));

  const t = EXAM.topic(id);
  const head = el('topic-header');
  head.innerHTML = `
    <div class="eyebrow">LNG 7266 · Final Exam</div>
    <h1 class="topic-title">${escapeHtml(t.name)}</h1>
    <p class="topic-source"><span class="src-ch">${escapeHtml(t.chapter)}</span>
       <span class="src-by">${escapeHtml(t.author)}</span></p>
  `;

  const body = el('topic-body');
  body.innerHTML = '';

  if (!EXAM.isPopulated(id)) {
    body.innerHTML = `<div class="placeholder">
      <div class="placeholder-ico">✎</div>
      <h3>Answers in progress</h3>
      <p>The vertical pilot is <strong>Listening — Process (Goh, Ch 6)</strong>.
         This topic’s layered answers are authored next, on the same verified template.</p>
      <p class="placeholder-src">Source verified: ${escapeHtml(t.chapter)} — ${escapeHtml(t.author)}.</p>
    </div>`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  SECTIONS.forEach(sec => {
    const qs = EXAM.bySection(id, sec.key);
    if (!qs.length) return;
    const block = document.createElement('section');
    block.className = 'qsection';
    block.innerHTML = `
      <div class="qsection-head">
        <h2>${sec.label}</h2>
        <span class="qsection-total">${sec.total}</span>
      </div>
      <p class="qsection-hint">${sec.hint}</p>`;
    qs.forEach(q => block.appendChild(renderQuestion(q)));
    body.appendChild(block);
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
  updateProgressStripe();
}

/* ── one question card ───────────────────────────────────────── */
function renderQuestion(q, term) {
  const card = document.createElement('article');
  card.className = 'qcard';
  card.id = 'q-' + q.id;

  const sup = SUPPORT[q.support] || SUPPORT.supported;
  const promptHtml = highlight(escapeHtml(q.prompt), term);

  // Define items show the term as the heading; their verbatim prompt is just
  // the term + ":" so we don't repeat it. Other sections show the full prompt.
  const showPrompt = !q.term;
  card.innerHTML = `
    <header class="qcard-head">
      ${q.term ? `<span class="q-term">${highlight(escapeHtml(q.term), term)}</span>` : ''}
      ${q.operator ? `<span class="q-op">${escapeHtml(q.operator)}</span>` : ''}
      ${showPrompt ? `<p class="q-prompt">${promptHtml}</p>` : ''}
    </header>

    <div class="layer layer-spine">
      <div class="layer-label">Memory spine <span>cues to rebuild the answer</span></div>
      <ol class="spine">${q.spine.map(c => `<li>${highlight(escapeHtml(c), term)}</li>`).join('')}</ol>
    </div>

    <div class="layer layer-core">
      <div class="layer-label">Exam-ready core</div>
      <div class="core">${q.core.map(b => renderBlock(b, term)).join('')}</div>
    </div>

    ${q.expansion && q.expansion.length ? `
    <details class="layer layer-exp">
      <summary>If time permits — expansion bank</summary>
      <ul class="exp">${q.expansion.map(x => `<li>${highlight(escapeHtml(x), term)}</li>`).join('')}</ul>
    </details>` : ''}

    <footer class="qcard-foot">
      <span class="cite">${escapeHtml(q.citation.chapter)} · ${escapeHtml(q.citation.page)}</span>
      <span class="sup ${sup.cls}">${sup.label}</span>
    </footer>
  `;
  return card;
}

/* ── content blocks ──────────────────────────────────────────── */
function renderBlock(b, term) {
  const hl = html => highlight(html, term); // blocks are author-trusted HTML
  switch (b.type) {
    case 'def':
      return `<div class="blk blk-def">${hl(b.html)}</div>`;
    case 'theory':
      return `<div class="blk blk-theory">${hl(b.html)}</div>`;
    case 'study':
      return `<div class="blk blk-study">${b.who ? `<span class="study-who">${escapeHtml(b.who)}${b.year ? ' (' + escapeHtml(b.year) + ')' : ''}</span> ` : ''}${hl(b.html)}</div>`;
    case 'example':
      return `<div class="blk blk-example">${hl(b.html)}</div>`;
    case 'caveat':
      return `<div class="blk blk-caveat">${hl(b.html)}</div>`;
    case 'flag':
      return ''; // process/discrepancy callouts hidden — answers stay clean
    case 'steps':
      return `<ol class="blk blk-steps">${b.items.map(it => `
        <li><div class="step-do">${hl(it.step)}</div>
        ${it.why ? `<div class="step-why"><span>why</span> ${hl(it.why)}</div>` : ''}</li>`).join('')}</ol>`;
    case 'distinction':
      return `<div class="blk blk-distinction">
        <div class="dist-side dist-a"><div class="dist-label">${escapeHtml(b.left.label)}</div>${hl(b.left.html)}</div>
        <div class="dist-side dist-b"><div class="dist-label">${escapeHtml(b.right.label)}</div>${hl(b.right.html)}</div>
      </div>`;
    case 'prose':
    default:
      return `<p class="blk blk-prose">${hl(b.html)}</p>`;
  }
}

/* ── search across all populated questions ───────────────────── */
function renderSearch() {
  el('topic-view').classList.add('hidden');
  const wrap = el('search-results');
  wrap.classList.remove('hidden');
  const term = state.search;
  const re = new RegExp(term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');

  const hay = q => [q.term, q.prompt, ...(q.spine || []),
    ...(q.core || []).map(b => JSON.stringify(b)),
    ...(q.expansion || [])].join(' ');

  const hits = EXAM.questions.filter(q => re.test(hay(q)));

  el('search-count').textContent =
    `${hits.length} result${hits.length === 1 ? '' : 's'} for “${term}”`;
  const list = el('search-results-list');
  list.innerHTML = '';
  if (!hits.length) {
    list.innerHTML = `<p class="placeholder-src">No matches. Note: only the Listening — Process pilot is populated so far.</p>`;
    return;
  }
  hits.forEach(q => {
    const t = EXAM.topic(q.topicId);
    const item = renderQuestion(q, term);
    const tag = document.createElement('div');
    tag.className = 'search-topic-tag';
    tag.textContent = `${t.name} · ${SECTIONS.find(s => s.key === q.section).label}`;
    item.insertBefore(tag, item.firstChild);
    list.appendChild(item);
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ── chrome: theme, sidebar, progress ────────────────────────── */
function toggleTheme() {
  const light = document.documentElement.classList.toggle('light');
  try { localStorage.setItem('lng7266_theme', light ? 'light' : 'dark'); } catch (e) {}
  el('theme-label').textContent = light ? 'Dark mode' : 'Light mode';
}
function toggleSidebar() {
  el('sidebar').classList.toggle('open');
  el('sidebar-overlay').classList.toggle('hidden');
}
function closeSidebar() {
  el('sidebar').classList.remove('open');
  el('sidebar-overlay').classList.add('hidden');
}
function updateProgressStripe() {
  const h = document.documentElement;
  const max = h.scrollHeight - h.clientHeight;
  const pct = max > 0 ? (h.scrollTop || document.body.scrollTop) / max * 100 : 0;
  el('progress-stripe').style.width = pct + '%';
}

document.addEventListener('DOMContentLoaded', init);
