/* ───────────────────────────────────────────────────────────────
   writing.js — Chapter 15, "Considerations for Teaching Second
   Language Writing" (Sara Cushing Weigle, Celce-Murcia et al., eds.,
   4th ed.). Book pp. 222–237.

   No author named in the exam prompts → names stripped, footer = chapter · page.
   STYLE: complete sentences throughout (prose + the "why" tags); the
   spine stays as terse memory cues. No process/discrepancy commentary
   in the displayed answers (renderer suppresses it anyway).
   Word targets: Define ~80–100 | Short Note ~180–200 | Application ~190–210.
   ─────────────────────────────────────────────────────────────── */
EXAM.addQuestions([

  /* ═══════════════ SECTION 1 — DEFINE ═══════════════ */
  {
    id: 'wr-d1',
    topicId: 'writing',
    section: 'define',
    term: 'Cognitive Perspective',
    prompt: 'Cognitive Perspective:',
    spine: { shape: 'map', center: 'Second-language writing as a cognitive act', payoff: 'The skills and knowledge sit within the individual writer, and L1 writing transfers once L2 proficiency is high enough.',
      spokes: [
        { label: 'Two ingredients', text: 'It combines writing ability, often learned first in the L1, with L2 proficiency.' },
        { label: 'Composing is juggling', text: 'The writer holds the message, the main and sub-points, the organisation, and a model of the reader all at once.', children: ['Plan, monitor, and revise throughout', 'In an L2, also search for the right language to say it'] },
      ] },
    core: [
      { type: 'def', html: 'The <strong>cognitive perspective</strong> views second-language writing as a combination of <strong>writing ability</strong> (often learned first in the L1) and <strong>L2 proficiency</strong> — a set of skills and knowledge that reside within the individual writer.' },
      { type: 'prose', html: 'On this view composing is a highly complex mental task: the writer holds in mind the overall message, the main points and sub-points, how to organise them, and a representation of the likely readers, while planning, monitoring, and revising. Adding a second language makes it harder still, because the writer must also find the appropriate language to express ideas clearly and accurately.' },
    ],
    citation: { chapter: 'Ch 15', page: 'p. 223' },
    support: 'supported', discrepancy: null,
  },
  {
    id: 'wr-d2',
    topicId: 'writing',
    section: 'define',
    term: 'Sociocultural Perspective',
    prompt: 'Sociocultural Perspective:',
    spine: { shape: 'map', center: 'Writing as situated social practice', payoff: 'What counts as good writing is relative to the community.',
      spokes: [
        { label: 'Literacy practices', text: 'Writing is a socially and culturally situated set of literacy practices shared by a particular community.' },
        { label: 'Learning to write', text: 'It means becoming a member of a discourse community.' },
        { label: 'Purpose and setting', text: 'Writing is always done for a purpose and an audience, shaped by a particular culture and setting.' },
        { label: 'Texts in dialogue', text: 'Texts never stand alone; every text is shaped by and responds to other texts.' },
      ] },
    core: [
      { type: 'def', html: 'The <strong>sociocultural perspective</strong> sees writing as part of a socially and culturally situated set of <strong>literacy practices shared by a particular community</strong>. Learning to write is the process of becoming a member of a <strong>discourse community</strong>.' },
      { type: 'prose', html: 'Writing is always done for a purpose, aimed at a specific audience, and shaped by a particular culture and setting, so what counts as good writing varies from one community to another. A key insight is that texts never exist in isolation: every text is shaped by, and responds to, other pre-existing texts.' },
    ],
    citation: { chapter: 'Ch 15', page: 'pp. 223–224' },
    support: 'supported', discrepancy: null,
  },
  {
    id: 'wr-d3',
    topicId: 'writing',
    section: 'define',
    term: 'Discourse Community',
    prompt: 'Discourse Community:',
    spine: { shape: 'map', center: 'A discourse community', payoff: 'Different disciplines have different conventions, which do not transfer across fields.',
      spokes: [
        { label: 'Shared language use', text: 'A group that shares values and ways of using language for particular purposes.' },
        { label: 'Examples', text: 'Biologists, politicians, or even fans of a musical genre.' },
        { label: 'Own conventions', text: 'Each has its own conventions for what counts as good writing, such as the passive voice.' },
        { label: 'Learning to write', text: 'It means learning to participate in one or more such communities.' },
      ] },
    core: [
      { type: 'def', html: 'A <strong>discourse community</strong> is a group of people — for example, biologists, politicians, or even fans of a musical genre — who <strong>share values and assumptions about using language</strong> and have particular ways of using language, spoken or written, for particular purposes.' },
      { type: 'prose', html: 'Each community has its own conventions, so a stylistic choice such as the passive voice may be good writing in one discipline but not in another. Learning to write therefore means learning to participate in one or more discourse communities, which is why writers cannot simply transfer everything they know from one field to another.' },
    ],
    citation: { chapter: 'Ch 15', page: 'p. 223' },
    support: 'supported', discrepancy: null,
  },
  {
    id: 'wr-d4',
    topicId: 'writing',
    section: 'define',
    term: 'Process Approach',
    prompt: 'Process Approach:',
    spine: { shape: 'flow', lead: 'The dominant paradigm: several drafts for feedback, not one graded draft',
      nodes: [ 'Pre-writing: brainstorm or outline to generate ideas', 'Drafting: get a full version down on the page', 'Feedback: give and receive responses on the draft', 'Revising: rework content and organisation first, language later' ],
      note: 'Writing is recursive, not linear; writers loop back and forth among these stages.' },
    core: [
      { type: 'def', html: 'The <strong>process approach</strong> is the dominant paradigm in writing instruction. Instead of producing single-draft essays graded mainly for accuracy, students write <strong>several drafts of each piece</strong> for feedback and evaluation.' },
      { type: 'prose', html: 'The emphasis falls on supporting students through the stages of writing: pre-writing (such as brainstorming or outlining), drafting, giving and receiving feedback, and revising. The approach reflects the finding that writing is <strong>recursive rather than linear</strong>, with writers moving back and forth among planning, writing, rereading, and revising.' },
    ],
    citation: { chapter: 'Ch 15', page: 'p. 226' },
    support: 'supported', discrepancy: null,
  },
  {
    id: 'wr-d5',
    topicId: 'writing',
    section: 'define',
    term: 'Intertextuality',
    prompt: 'Intertextuality:',
    spine: { shape: 'map', center: 'Intertextuality', payoff: 'It is often invoked to explain why students struggle to avoid plagiarism.',
      spokes: [
        { label: 'Reuse and recombine', text: 'All writing uses pre-existing words and phrases, combined in new ways.' },
        { label: 'Builds on the past', text: 'Every text refers to and builds on what has come before.' },
        { label: 'Implicit conventions', text: 'The borrowing conventions are implicit and known only within a discourse community.' },
        { label: 'The beginner gap', text: 'Beginning writers lack that community experience, so paraphrasing is hard for them.' },
      ] },
    core: [
      { type: 'def', html: '<strong>Intertextuality</strong> is the idea that <strong>all writing uses pre-existing words and phrases, combined in new ways</strong>, referring to and building on what has come before. Writers constantly draw on and refer to other existing texts in their own writing.' },
      { type: 'prose', html: 'These borrowing conventions are often implicit and known only to people within a particular discourse community. The notion is frequently invoked to explain why students struggle to avoid plagiarism: beginning writers, lacking that community experience, find it hard to follow guidance about “using their own words” and paraphrasing.' },
    ],
    citation: { chapter: 'Ch 15', page: 'p. 227' },
    support: 'supported', discrepancy: null,
  },

  /* ═══════════════ SECTION 2 — SHORT NOTE ═══════════════ */
  {
    id: 'wr-s1',
    topicId: 'writing',
    section: 'short_note',
    operator: 'explain',
    prompt: 'Define "Discourse Community" and explain its significance in academic writing according to the sociocultural perspective.',
    spine: { shape: 'map', center: 'Discourse community in academic writing', payoff: 'Teaching academic writing means teaching students to join a community, not just to write correct sentences.',
      spokes: [
        { label: 'What it is', text: 'A group that shares values and ways of using language for particular purposes.' },
        { label: 'Joining a discipline', text: 'Academic writing means joining a disciplinary community and its conventions.' },
        { label: 'Good writing is relative', text: 'The passive voice, a citation style, or a genre may be valued in one field and rejected in another.' },
        { label: 'Skills do not transfer', text: 'Because conventions differ, mastery in one discipline does not carry to the next.' },
      ] },
    core: [
      { type: 'prose', html: 'A <strong>discourse community</strong> is a group that shares values and assumptions about using language and has its own ways of using language for particular purposes. From the <strong>sociocultural perspective</strong>, learning to write is the process of becoming a member of such a community.' },
      { type: 'steps', items: [
        { step: '<strong>Academic writing means joining a disciplinary community.</strong> Each discipline — biology, history, business — has its own conventions for what counts as good writing.', why: 'Students are not learning “writing in general” but the practices of a specific field.' },
        { step: '<strong>Good writing is community-relative.</strong> A choice such as the passive voice, a citation style, or a genre may be valued in one discipline and rejected in another.', why: 'There is no single standard that holds across all academic writing.' },
        { step: '<strong>Writing skills do not transfer automatically.</strong> Because each community’s conventions differ, mastery of writing in one discipline does not guarantee it in the next.', why: 'Membership has to be built separately in each community.' },
      ] },
      { type: 'prose', html: 'The significance is that teaching academic writing means teaching students to participate in a discourse community, not just to produce correct sentences. Instruction has to make the community’s implicit conventions explicit.' },
    ],
    citation: { chapter: 'Ch 15', page: 'pp. 223–224' },
    support: 'supported', discrepancy: null,
  },
  {
    id: 'wr-s2',
    topicId: 'writing',
    section: 'short_note',
    operator: 'compare',
    prompt: 'Compare and contrast "Eye" learners and "Ear" learners and analyze their different instructional needs in a writing classroom.',
    spine: { shape: 'contrast', rel: 'vs',
      a: { label: 'Eye learners', text: 'Learned English through formal education, strong in vocabulary and explicit grammar but weaker in fluency and naturalness.' },
      b: { label: 'Ear learners', text: 'Learned English informally through oral interaction (Generation 1.5), fluent and natural but weaker in academic reading, writing, and formal grammar.' },
      bridge: 'Their strengths are opposite, so the teacher gives eye learners fluency and composition and ear learners explicit form and academic literacy.' },
    core: [
      { type: 'distinction',
        left:  { label: '“EYE” LEARNERS', html: 'Learned English through <strong>formal education</strong>, and so primarily through reading and grammar instruction. Their strengths are formal vocabulary and explicit knowledge of grammar, but they may lack the fluency and naturalness of ear learners.' },
        right: { label: '“EAR” LEARNERS', html: 'Learned English <strong>informally through oral interaction</strong>; many emigrated as children and speak another language at home (sometimes called “Generation 1.5”). They are fluent and natural, but many leave school without the academic reading and writing skills, or the explicit grammar, that higher education demands.' },
      },
      { type: 'steps', items: [
        { step: '<strong>Eye learners need fluency and composition.</strong> Build naturalness, idea generation, and the composing process on top of their grammar knowledge.', why: 'Their gap is using the language freely and writing whole texts, not the rules.' },
        { step: '<strong>Ear learners need explicit form and academic literacy.</strong> Teach grammar explicitly, academic vocabulary, and the conventions of formal written genres.', why: 'Their oral fluency can hide real gaps in academic reading and writing.' },
      ] },
      { type: 'prose', html: 'The distinction is something of a simplification, but it is useful, because the two groups arrive with opposite strengths. A writing teacher therefore has to adjust lessons to each rather than treat the class as uniform.' },
    ],
    citation: { chapter: 'Ch 15', page: 'pp. 224–225' },
    support: 'supported', discrepancy: null,
  },
  {
    id: 'wr-s3',
    topicId: 'writing',
    section: 'short_note',
    operator: 'justify',
    prompt: 'Justify the implementation of a "Process Approach" in a second language writing curriculum.',
    spine: { shape: 'map', center: 'Why the process approach is justified', payoff: 'It aligns the curriculum with how writing is genuinely produced.',
      spokes: [
        { label: 'Writing is recursive', text: 'Real writers loop among planning, writing, rereading, and revising rather than working in a straight line.' },
        { label: 'Experts work this way', text: 'They plan and revise more, and attend to content before surface.' },
        { label: 'Drafts drive growth', text: 'Several drafts with feedback support development in a way one graded draft cannot.' },
        { label: 'Global before local', text: 'Feedback separates content and organisation from language, addressing meaning first.' },
        { label: 'Fits L2 writers', text: 'L2 writers need more of everything, and the staged cycle supplies the practice and feedback.' },
      ] },
    core: [
      { type: 'prose', html: 'The process approach is justified by what research shows real writers actually do. Writing is <strong>recursive, not linear</strong>: expert writers move back and forth among planning, writing, rereading, and revising, and they spend more time on content and organisation than on small surface changes.' },
      { type: 'steps', items: [
        { step: '<strong>Drafting and feedback drive development.</strong> Several drafts with feedback and revision support growth in a way that a single graded draft cannot.', why: 'Writing improves through reworking, not through one attempt judged for accuracy.' },
        { step: '<strong>It separates global concerns from local ones.</strong> Feedback addresses content and organisation first and language later.', why: 'A premature focus on sentence-level errors stifles idea generation and wastes effort on text that will be rewritten.' },
        { step: '<strong>It fits L2 writers’ needs.</strong> L2 writers “need more of everything” — more practice, more strategy work, and more feedback.', why: 'The staged, supported cycle supplies exactly that, instead of expecting expertise at once.' },
      ] },
      { type: 'prose', html: 'Implementing the approach therefore aligns the curriculum with how writing is genuinely produced, and gives developing L2 writers the practice and feedback they need.' },
    ],
    citation: { chapter: 'Ch 15', page: 'pp. 225–226' },
    support: 'supported', discrepancy: null,
  },
  {
    id: 'wr-s4',
    topicId: 'writing',
    section: 'short_note',
    operator: 'synthesize',
    prompt: 'Synthesize the relationship between reading and writing through the concepts of "Reading to Write" and "Writing to Read."',
    spine: { shape: 'contrast', rel: 'vs',
      a: { label: 'Reading to write', text: 'Using reading as input for a text, mining it for rhetorical, linguistic, and stylistic knowledge.' },
      b: { label: 'Writing to read', text: 'Using writing, such as response journals, to interpret a text and deepen understanding of it.' },
      bridge: 'Reading and writing are complementary parts of literacy that run in a loop: reading feeds writing, writing deepens reading, and taught together they build literacy more effectively.' },
    core: [
      { type: 'prose', html: 'Reading and writing are now seen as <strong>complementary elements of literacy</strong> rather than separate skills, and writing problems can often be traced back to problems with reading. Two connections make the relationship concrete.' },
      { type: 'steps', items: [
        { step: '<strong>Reading to write.</strong> Students use reading as a source of input for creating a text, actively searching it for knowledge about writing — rhetorical (how it is organised), linguistic (useful words and structures), and stylistic (how formal it is).', why: 'The texts students read become models and material for what they write.' },
        { step: '<strong>Writing to read.</strong> Students use writing as a way of interpreting and understanding a text — for example, writing about a topic before reading on it, or keeping response journals.', why: 'Writing about what they read deepens comprehension, which in turn improves their later writing.' },
      ] },
      { type: 'prose', html: 'Put together, the two run in a loop: reading supplies models and input for writing, and writing deepens the understanding of what is read. Taught together, they build literacy more effectively than either one alone.' },
    ],
    citation: { chapter: 'Ch 15', page: 'pp. 226–227' },
    support: 'supported', discrepancy: null,
  },

  /* ═══════════════ SECTION 3 — APPLICATION ═══════════════ */
  {
    id: 'wr-a1',
    topicId: 'writing',
    section: 'application',
    operator: 'design',
    prompt: 'Contextual Application: Transitioning Saudi "Eye" Learners to Academic Writing. Most Saudi students entering university have been "Eye" learners, focused heavily on "reading and grammar instruction" in public schools. Based on the "Process Approach" and "Cognitive Perspective," how can a foundation-year writing instructor shift their focus from "grammatical accuracy" to "effective composition"?',
    spine: { shape: 'flow', layout: 'stack', start: 'problem', end: 'outcome',
      lead: 'Cognitive Perspective and Process Approach',
      nodes: [
        'Saudi eye learners have strong grammar but treat writing as a hunt for accuracy, not composition',
        'Start with pre-writing: brainstorm or outline, and have students name purpose and audience',
        'Run a multi-draft cycle, responding to content and organisation first and deferring grammar',
        'Teach composing strategies directly: goal-setting, audience awareness, planning and monitoring',
        'Students treat accuracy as one late stage; assess with a rubric weighting content across drafts'
      ] },
    core: [
      { type: 'prose', html: '<strong>Problem + evidence.</strong> Saudi “eye” learners arrive from a public-school diet of reading and grammar, so they have explicit grammar knowledge but treat writing as a hunt for <strong>grammatical accuracy</strong> rather than effective composition. The cognitive perspective and the process approach together move that focus.' },
      { type: 'steps', items: [
        { step: '<strong>Start with pre-writing.</strong> Open each assignment with brainstorming, freewriting, or outlining, and have students name their purpose and audience.', why: 'The cognitive perspective treats composing as juggling message, organisation, and a model of the reader, and pre-writing builds those while loosening the grip of accuracy.' },
        { step: '<strong>Run a multi-draft cycle with content-first feedback.</strong> Respond to the first draft on content and organisation only, and defer grammar to a later draft.', why: 'The process approach separates global concerns from local ones, so ideas are not stifled by premature error-hunting.' },
        { step: '<strong>Teach composing strategies directly.</strong> Model goal-setting, audience awareness, and planning, monitoring, and evaluating.', why: 'These strategies can be taught in a short time and are exactly what eye learners lack.' },
      ] },
      { type: 'prose', html: '<strong>Outcome / assessment.</strong> Students come to treat accuracy as one late stage within composing rather than the whole task. Assess with a rubric that weights content and organisation and rewards improvement across drafts, rather than scoring a single draft for grammar.' },
    ],
    citation: { chapter: 'Ch 15', page: 'pp. 223, 225–226' },
    support: 'supported', discrepancy: null,
  },
  {
    id: 'wr-a2',
    topicId: 'writing',
    section: 'application',
    operator: 'apply',
    prompt: 'Cultural & Linguistic Analysis: Plagiarism and "Intertextuality" in Saudi Higher Ed. Many Saudi students struggle with "plagiarism," often because they lack the "linguistic resources" to paraphrase correctly or view "copying" as a legitimate strategy for honoring expert voices. Using the concepts of "Intertextuality" and "Scaffolding," propose a pedagogical alternative to a "punitive" plagiarism policy.',
    spine: { shape: 'flow', layout: 'stack', start: 'problem', end: 'outcome',
      lead: 'Intertextuality and Scaffolding',
      nodes: [
        'Saudi students copy because they lack the language to paraphrase or see reuse as honouring experts',
        'Reframe copying through intertextuality: a developmental, linguistic stage, not a moral failure',
        'Scaffold the linguistic resources: sentence frames, paraphrase strategies, and models of citing sources',
        'Make the discipline citation conventions explicit and teach source use in stages',
        'Students incorporate sources as developing members; assess paraphrasing formatively across drafts'
      ] },
    core: [
      { type: 'prose', html: '<strong>Reframe the problem.</strong> Through the lens of <strong>intertextuality</strong>, all writing reuses and builds on pre-existing texts through conventions that are implicit and known only within a discourse community. Saudi students who copy often lack the linguistic resources to paraphrase, or come from a tradition in which reusing an expert’s words honours them. Their copying is a <strong>developmental and linguistic</strong> stage of joining the community, not a moral failure, and teachers should avoid framing it as one.' },
      { type: 'steps', items: [
        { step: '<strong>Treat textual borrowing as developmental.</strong> Tell students plainly that experienced writers always build on other texts, and that the task is to learn the community’s conventions for doing so.', why: 'This replaces a punitive, moral framing with intertextuality, which is how writing actually works.' },
        { step: '<strong>Scaffold the linguistic resources.</strong> Provide sentence frames, paraphrase and summary strategies, and models of how writers integrate and cite sources, letting students lean on source language while their proficiency grows.', why: 'Students copy partly because they cannot yet say it another way, so scaffolding supplies what they lack.' },
        { step: '<strong>Make citation conventions explicit and teach them in stages.</strong> Show the discipline’s citation norms and design tasks that build source use step by step.', why: 'The conventions are implicit to insiders, so they must be taught rather than assumed.' },
      ] },
      { type: 'prose', html: '<strong>Outcome / assessment.</strong> Students learn to incorporate sources appropriately as developing members of the discourse community. Assess paraphrasing and citation formatively across drafts, treating lapses as teaching moments rather than offences.' },
    ],
    citation: { chapter: 'Ch 15', page: 'p. 227' },
    support: 'supported', discrepancy: null,
  },

]);
