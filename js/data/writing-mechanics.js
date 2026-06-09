/* ───────────────────────────────────────────────────────────────
   writing-mechanics.js — Chapter 14, "Practical Tasks for Mastering
   the Mechanics of Writing and Going Just Beyond" (Elite Olshtain,
   Celce-Murcia et al., eds., 4th ed.). Book pp. 208–221.

   SOURCE-MAP NOTE: the guide titles this "Functional Tasks…" and
   names no author; verified title is "Practical Tasks…" by Olshtain
   (see topics.js flag). No author is named in the exam prompts, so
   names are stripped and the footer is chapter · page.

   STYLE: complete sentences throughout (prose + the one-line "why"
   tags); the spine stays as terse memory cues.
   Word targets: Define ~70–90 | Short Note ~180–200 | Application ~190–210.
   ─────────────────────────────────────────────────────────────── */
EXAM.addQuestions([

  /* ═══════════════ SECTION 1 — DEFINE ═══════════════ */
  {
    id: 'wm-d1',
    topicId: 'writing-mechanics',
    section: 'define',
    term: 'Letter Recognition Activities',
    prompt: 'Letter Recognition Activities:',
    spine: ['A form of "matching task" (1 of the 3 recognition-task types)', 'Goal: fast, accurate recognition of English letters', 'Distinguish a letter from similar ones; match upper/lower case; find a letter in a group', 'Recognition only — no writing, no pronouncing', 'Especially for learners from a non-Roman script'],
    core: [
      { type: 'def', html: '<strong>Letter recognition activities</strong> are early drills whose goal is the <strong>quick, accurate recognition of English letters</strong>. They are a form of the “matching task,” one of the three recognition-task types.' },
      { type: 'prose', html: 'In these activities learners distinguish a target letter from visually similar ones (for example, finding the “odd man out” or matching upper- and lower-case forms) and search for a particular letter within a group. The tasks require recognition only, so the learner neither writes nor pronounces the letters. They matter most for students whose first language uses a non-Roman script.' },
    ],
    citation: { chapter: 'Ch 14', page: 'pp. 213–214' },
    support: 'supported', discrepancy: null,
  },
  {
    id: 'wm-d2',
    topicId: 'writing-mechanics',
    section: 'define',
    term: 'Meaningful Copying Activities',
    prompt: 'Meaningful Copying Activities:',
    spine: ['Copying that carries meaning / a communicative purpose', 'e.g. copy the sentence that matches a picture; answer with a supplied sentence', 'Contrasts with mechanical tracing (shapes only)', 'Practises whole words + sentences while building writing fluency', 'Bridges the mechanics of writing → personal, communicative writing'],
    core: [
      { type: 'def', html: '<strong>Meaningful copying activities</strong> are copying tasks that carry a <strong>communicative purpose</strong> rather than simply reproducing letter shapes. The learner copies language that means something — for example, copying the sentence that matches a picture, or answering a question with the correct supplied sentence.' },
      { type: 'prose', html: 'Although copying can look “terribly mechanical,” it lets students practise whole words and sentences while gaining fluency in writing, and it ties written form to meaning. It is the step that bridges the bare mechanics of writing and later personal, communicative writing.' },
    ],
    citation: { chapter: 'Ch 14', page: 'pp. 214–216' },
    support: 'supported', discrepancy: null,
  },

  /* ═══════════════ SECTION 2 — SHORT NOTE ═══════════════ */
  {
    id: 'wm-s1',
    topicId: 'writing-mechanics',
    section: 'short_note',
    operator: 'identify',
    prompt: 'Identify and describe the primary objectives of "Writing tasks" for learners who are transitioning from a different writing system.',
    spine: ['"Writing tasks" = produce the SHAPES of letters (recognition + production)', 'Begin with tracing → focus on the detailed characteristics of each letter', 'This stage is ONLY for learners from a different writing system', 'Roman-alphabet learners skip it and write meaningful words directly', 'Also: master left-to-right orientation; support reading'],
    core: [
      { type: 'prose', html: 'The primary objective of writing tasks at this stage is to let students <strong>produce the shapes of the letters</strong>, as both a recognition and a production task. For learners transitioning from a different writing system this is a genuine learning step, not a formality.' },
      { type: 'steps', items: [
        { step: '<strong>Produce and internalise the letter shapes.</strong> The activities usually begin with tracing letters printed on the page, so the learner can focus on the detailed characteristics of each shape.', why: 'A student from a non-Roman script must first learn to form the unfamiliar characters.' },
        { step: '<strong>Establish the correct orientation.</strong> Learners whose first language runs right-to-left or top-to-bottom must acquire the English left-to-right, horizontal direction.', why: 'Direction does not transfer from a differently oriented script.' },
        { step: '<strong>Support reading.</strong> Practising the writing of the letters sharpens the learner’s ability to discriminate and perceive them while reading.', why: 'At this early stage writing and reading develop together.' },
      ] },
      { type: 'caveat', html: 'This tracing stage is needed only for learners coming from a different writing system. Students who already know the Roman alphabet can move straight to writing meaningful words.' },
    ],
    citation: { chapter: 'Ch 14', page: 'pp. 209–210, 213–214' },
    support: 'supported', discrepancy: null,
  },
  {
    id: 'wm-s2',
    topicId: 'writing-mechanics',
    section: 'short_note',
    operator: 'explain',
    prompt: 'Explain the pedagogical purpose of "Sound-spelling correspondence tasks" in early literacy.',
    spine: ['English is NOT one-to-one letter↔sound; it has systematic sound-spelling correspondences', 'Task goal: match sounds (and words) to their written form', 'Teach generalisations, e.g. CVC (short vowel) vs CVCe (long vowel)', 'Integrate all four skills + pronunciation', 'Build the foundation for reading and writing'],
    core: [
      { type: 'prose', html: 'English orthography is <strong>not a one-to-one letter-to-sound system</strong>, but it is far more rule-governed than learners assume: a systematic set of <strong>sound-spelling correspondences</strong> underlies it. The purpose of these tasks is to build the learner’s command of that system.' },
      { type: 'steps', items: [
        { step: '<strong>Match sound to written form.</strong> Learners hear words, read aloud or recorded, and match the sounds, or sequences of sounds, to their written forms.', why: 'This mapping is the foundation of both reading and spelling.' },
        { step: '<strong>Teach useful generalisations.</strong> The tasks foreground spelling environments, such as the contrast between CVC (a short vowel, as in “pin”) and CVCe (a long vowel, as in “pine”).', why: 'Generalisations let learners decode unfamiliar words instead of memorising each one.' },
        { step: '<strong>Integrate the four skills.</strong> Because learners listen, read, write, and pronounce the forms, the tasks give a solid basis for all four skills and for pronunciation.', why: 'Sound-spelling work sits where pronunciation, reading, and writing meet.' },
      ] },
      { type: 'prose', html: 'Mastering these correspondences gives beginners the dependable foundation on which fluent reading and writing are built.' },
    ],
    citation: { chapter: 'Ch 14', page: 'pp. 211–214' },
    support: 'supported', discrepancy: null,
  },
  {
    id: 'wm-s3',
    topicId: 'writing-mechanics',
    section: 'short_note',
    operator: 'compare',
    prompt: 'Compare and contrast "Mechanical Copying" (tracing) and "Meaningful Copying Activities."',
    spine: ['Mechanical (tracing) = reproduce letter SHAPES; no meaning', 'only for learners from a different writing system; can be skipped', 'Meaningful = copy language that carries a PURPOSE (sentence ↔ picture)', 'practises words + sentences, builds writing fluency, links form ↔ meaning', 'A sequence: tracing → meaningful copying → personal writing'],
    core: [
      { type: 'distinction',
        left:  { label: 'MECHANICAL COPYING (TRACING)', html: 'The learner traces letters, words, and sentences printed on the page to reproduce their <strong>shapes</strong>. The focus is purely on the form of the script, with no communicative meaning. Only learners coming from a non-Roman script need it; those who already read Roman letters can skip it.' },
        right: { label: 'MEANINGFUL COPYING', html: 'The learner copies language that carries a <strong>purpose</strong> — for example, copying the sentence that matches a picture, or completing a task with supplied sentences. It practises whole words and sentences and ties written form to meaning.' },
      },
      { type: 'prose', html: 'The contrast is <strong>form-only versus form-with-meaning</strong>. The two are not rivals but a sequence: tracing, where it is needed, secures the shapes, and meaningful copying then builds writing fluency while pointing toward communication. Even copying that “seems terribly mechanical” earns its place, because it lets learners practise words and sentences as they gain fluency.' },
    ],
    citation: { chapter: 'Ch 14', page: 'pp. 214–216' },
    support: 'supported', discrepancy: null,
  },
  {
    id: 'wm-s4',
    topicId: 'writing-mechanics',
    section: 'short_note',
    operator: 'synthesize',
    prompt: 'Synthesize how early writing tasks (tracing, matching, and copying) interact to develop "Language Knowledge."',
    spine: ['Three recognition-task types: matching, writing (tracing), meaningful copying', 'Matching → recognise letters; Tracing → produce shapes; Copying → form + meaning + fluency', 'All rehearse the sound-spelling correspondences across the four skills', 'Writing and reading develop together at this stage', '"Language knowledge" gained = the basis for later communicative writing'],
    core: [
      { type: 'prose', html: 'The three early task types work as one progression. <strong>Matching</strong> tasks build letter recognition; <strong>writing (tracing)</strong> tasks add the production of letter shapes; and <strong>meaningful copying</strong> joins form to meaning while building fluency. Together they develop the <strong>language knowledge</strong> on which later writing rests.' },
      { type: 'steps', items: [
        { step: '<strong>They share one engine: the sound-spelling correspondences.</strong> Each task type rehearses the mapping between sounds and written forms across listening, reading, writing, and speaking.', why: 'A single system underlies recognition, production, and meaning.' },
        { step: '<strong>They reinforce reading as they build writing.</strong> Writing the letters sharpens the discrimination and perception needed to read them.', why: 'At the early stage the two skills develop together.' },
        { step: '<strong>They accumulate into transferable knowledge.</strong> The vocabulary, spelling patterns, and sentence forms gained become the basis for more sophisticated, personally relevant texts.', why: 'This accumulated language knowledge is the foundation for communicative writing.' },
      ] },
      { type: 'caveat', html: 'The tasks are therefore not isolated drills. Matching, tracing, and copying feed one another and converge on the mechanics and the knowledge that meaningful writing requires.' },
    ],
    citation: { chapter: 'Ch 14', page: 'pp. 213–216' },
    support: 'supported', discrepancy: null,
  },

  /* ═══════════════ SECTION 3 — APPLICATION ═══════════════ */
  {
    id: 'wm-a1',
    topicId: 'writing-mechanics',
    section: 'application',
    operator: 'design',
    prompt: 'Contextual Application: K-12 Elementary Schools in Saudi Arabia. Saudi students transitioning from Arabic to English must adapt to a "different writing system" and a new direction of script [2]. Design a "Meaningful Copying" task for 3rd-grade students that helps them master the English "left-to-right" orientation while reinforcing "Sound-Spelling Correspondences."',
    spine: ['Problem: Arabic L1 runs right-to-left → must master English left-to-right', 'Use MEANINGFUL copying (with a purpose), not bare tracing', 'Picture + sentence bank: copy the matching sentence under each picture', 'Choose sentences loaded with target sound-spelling patterns (CVC/CVCe, "a" in "ball")', 'Scaffold direction: start-dot, left-to-right arrows, numbered word order', 'Assess legible left-to-right copies with correct spelling patterns'],
    core: [
      { type: 'prose', html: '<strong>Problem + evidence.</strong> Third-graders moving from Arabic must adapt to a different script and, crucially, to the opposite <strong>direction</strong>, because English runs left-to-right. A meaningful copying task can drill that orientation while reinforcing sound-spelling correspondences, so the directional practice is never empty.' },
      { type: 'steps', items: [
        { step: '<strong>Set a picture-and-sentence bank.</strong> Give each child simple pictures and a bank of short sentences; the child copies the sentence that matches each picture beneath it, left to right.', why: 'The matching gives the copying a purpose, so it is meaningful rather than mechanical.' },
        { step: '<strong>Load the sentences with target sound-spelling patterns.</strong> Choose words that rehearse specific correspondences, such as CVC versus CVCe (“cat / cake”) or the letter “a” before “ll” (“ball,” “wall”).', why: 'Each copied sentence then doubles as sound-spelling practice.' },
        { step: '<strong>Scaffold the direction.</strong> Add a green start-dot on the left, faint left-to-right arrows, and numbered word order, then fade these supports as control grows.', why: 'Explicit directional cues counter the right-to-left habit transferred from Arabic.' },
      ] },
      { type: 'prose', html: '<strong>Outcome / assessment.</strong> Children produce legible, correctly oriented sentences whose spelling reflects the target patterns. Assess the copies for left-to-right control and accurate sound-spelling, then progress to a short “write about today’s weather” task using helper sentences.' },
    ],
    citation: { chapter: 'Ch 14', page: 'pp. 209–210, 214–216' },
    support: 'supported', discrepancy: null,
  },
  {
    id: 'wm-a2',
    topicId: 'writing-mechanics',
    section: 'application',
    operator: 'apply',
    prompt: 'Research-Informed Pedagogy: Fast-Tracking Adult Learners in Saudi IEPs. Adult learners in Saudi Intensive English Programs (IEPs) are often "familiar with the Roman alphabet" but lack writing fluency [2]. Critique the use of "tracing" for these learners and propose an alternative using the "Meaningful Copying" model.',
    spine: ['Chapter: tracing is ONLY for learners from a different writing system', 'These adults already know the Roman alphabet → tracing is redundant + infantilising', 'Their real gap is writing FLUENCY, which tracing does not build', 'Start instead at MEANINGFUL copying (purposeful)', 'Move quickly to practical writing tasks (lists, notes, forms, messages) — authentic for adults', 'Assess fluency on real tasks, not letter shapes'],
    core: [
      { type: 'prose', html: '<strong>Critique.</strong> The chapter is explicit that the tracing stage “is needed only for learners who come from a different writing system; students familiar with the Roman alphabet can move right to writing meaningful words.” Saudi adults in an IEP already know the Roman alphabet, so tracing rehearses a skill they have: it wastes scarce IEP time, can feel infantilising, and does nothing for their real gap, which is <strong>writing fluency</strong>.' },
      { type: 'steps', items: [
        { step: '<strong>Skip tracing and start at meaningful copying.</strong> Begin with picture-and-sentence matching and supplied-sentence tasks, where the copying carries a purpose.', why: 'Meaningful copying builds the fluency that tracing cannot.' },
        { step: '<strong>Move quickly to practical writing tasks.</strong> Progress to lists, notes, messages, and form-filling, which are procedural, predictable formats with a real audience.', why: 'These tasks are authentic and adult-appropriate, and they reinforce spelling and morphology in use.' },
        { step: '<strong>Use the keyboard and real channels.</strong> Have learners type their lists and messages and exchange them by email or text.', why: 'Adults need fluency in the channels they will actually write in.' },
      ] },
      { type: 'prose', html: '<strong>Outcome / assessment.</strong> Learners gain writing fluency on purposeful, adult-relevant tasks rather than on letter shapes. Assess by how much they can produce, legibly and on task — a real note, list, or message — not by the neatness of traced letters.' },
    ],
    citation: { chapter: 'Ch 14', page: 'pp. 214, 216–219' },
    support: 'supported', discrepancy: null,
  },

]);
