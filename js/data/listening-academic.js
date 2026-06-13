/* ───────────────────────────────────────────────────────────────
   listening-academic.js — Chapter 7, "Dimensions of Academic
   Listening" (Celce-Murcia et al., eds., 4th ed.). Book pp. 90–103.

   Author names are deliberately omitted: the exam prompts for this
   chapter name no one, and the "pedagogical model" / eight dimensions
   are this chapter's own. Footer citation = chapter + page only.
   Word targets: Define ~70–90 | Short Note ~200–220 | Application ~220.
   ─────────────────────────────────────────────────────────────── */
EXAM.addQuestions([

  /* ═══════════════ SECTION 1 — DEFINE ═══════════════ */
  {
    id: 'al-d1',
    topicId: 'listening-academic',
    section: 'define',
    term: 'Narrow-angle Approach',
    prompt: 'Narrow-angle Approach:',
    spine: { shape: 'map', center: 'Narrow-angle academic listening course', payoff: 'Favoured where possible, because language varies by discipline.',
      spokes: [
        { label: 'Subject range', text: 'built around a narrow range of subject matter, often a single discipline' },
        { label: 'Language focus', text: 'targets the specific language features of that one field' },
        { label: 'When feasible', text: 'only when learners share one disciplinary background, such as a single-subject MA group' },
      ] },
    core: [
      { type: 'def', html: 'A <strong>narrow-angle approach</strong> builds an academic-listening course around a <strong>narrow range of subject matter</strong> — often a single discipline — using the specific language features of that field.' },
      { type: 'prose', html: 'The chapter <strong>favours it where possible</strong>, on the straightforward argument that <em>language varies according to discipline</em>, so targeting a cohort’s exact needs gives richer, more relevant input.' },
      { type: 'caveat', html: 'Only feasible when learners share <strong>one</strong> disciplinary background (e.g. a single-subject MA group).' },
    ],
    citation: { chapter: 'Ch 7', page: 'p. 95' },
    support: 'supported', discrepancy: null,
  },
  {
    id: 'al-d2',
    topicId: 'listening-academic',
    section: 'define',
    term: 'Wide-angle Approach',
    prompt: 'Wide-angle Approach:',
    spine: { shape: 'map', center: 'Wide-angle academic listening course', payoff: 'The default, often forced, choice when a class is disciplinarily mixed.',
      spokes: [
        { label: 'Subject range', text: 'covers a broad range of subject matter across fields' },
        { label: 'Language focus', text: 'teaches more general language features, also called broad-angle' },
        { label: 'Typical setting', text: 'intensive English, pre-sessional, and foundation programs mixing humanities, science, and business' },
      ] },
    core: [
      { type: 'def', html: 'A <strong>wide-angle</strong> (or “broad-angle”) <strong>approach</strong> covers a <strong>broad range of subject matter</strong> and more <strong>general language features</strong>.' },
      { type: 'prose', html: 'It is the default — and often <em>forced</em> — choice when a class is disciplinarily mixed. Intensive English, pre-sessional, and foundation programs typically combine humanities, science, and business students, leaving designers no option but to go wide.' },
    ],
    citation: { chapter: 'Ch 7', page: 'p. 95' },
    support: 'supported', discrepancy: null,
  },
  {
    id: 'al-d3',
    topicId: 'listening-academic',
    section: 'define',
    term: 'Community of Practice',
    prompt: 'Community of Practice:',
    spine: { shape: 'map', center: 'Initiation into a community of practice', payoff: 'The teacher bridges the learners and the target practice so a new community of learning forms.',
      spokes: [
        { label: 'What the lecture does', text: 'initiates students into the genres of the academic lecture' },
        { label: 'What it inducts into', text: 'the behaviour and pedagogy of the discipline itself' },
        { label: 'What comprehension needs', text: 'familiarity with the lecture genre, not just language level' },
      ] },
    core: [
      { type: 'def', html: 'In academic listening, students belong to a <strong>community of learners</strong> and, through lectures, are being <strong>initiated into a community of practice</strong> — the genres of the academic lecture and the behaviour and pedagogy of the discipline.' },
      { type: 'prose', html: 'So comprehension depends not only on language level but on <strong>familiarity with the lecture genre</strong> and expectations of it. The teacher’s task is to <em>bridge</em> the students’ community of learners and the target community of practice so a new community of learning forms.' },
    ],
    citation: { chapter: 'Ch 7', page: 'p. 93' },
    support: 'supported', discrepancy: null,
  },

  /* ═══════════════ SECTION 2 — SHORT NOTE ═══════════════ */
  {
    id: 'al-s1',
    topicId: 'listening-academic',
    section: 'short_note',
    operator: 'identify',
    prompt: 'Identify and define the four methodological approaches used in researching second language academic listening.',
    spine: { shape: 'map', center: 'Four ways to research academic listening', payoff: 'The four lines complement one another: psychometric work has thinned while ethnographic study is growing.',
      spokes: [
        { label: 'Psychometric experiments', text: 'use tests to measure how input variation affects comprehension' },
        { label: 'Discourse analysis', text: 'examines spoken texts to find the features listeners must identify' },
        { label: 'Listening strategy research', text: 'identifies the strategies L2 learners use and how efficient they are' },
        { label: 'Ethnographic investigation', text: 'studies the behaviour and beliefs of L2 student groups while listening' },
      ] },
    core: [
      { type: 'prose', html: 'Four methodological approaches to researching academic listening can be identified:' },
      { type: 'steps', items: [
        { step: '<strong>Psychometric experiments.</strong> A positivist approach using <em>tests</em> to measure how variation in the input affects comprehension — speech rate and pauses, syntactic and discourse modification, lexis, accent, and the type of listening support given.', why: '' },
        { step: '<strong>Discourse analysis.</strong> Examines spoken texts <em>in detail</em> to find the features listeners must identify: lexical phrases, main ideas/propositions, discourse patterns, asides, and pronoun use.', why: '' },
        { step: '<strong>Research into listening strategies.</strong> Identifies the strategies L2 learners use and how efficient they are, via listening tests, questionnaires, listening diaries, talk-aloud protocols, and strategy-instruction studies.', why: '' },
        { step: '<strong>Ethnographic investigations.</strong> Study the behaviour and beliefs of groups of L2 students listening in their L2. Rich but demanding — needing data triangulation, long timescales, and more than one researcher.', why: '' },
      ] },
      { type: 'prose', html: 'Listening was barely researched until the 1970s, when it was recognised as a core skill needing its own pedagogy. The four lines complement one another: psychometric work has thinned in recent years, while ethnographic study — though demanding — is growing; together they tell teachers what genuinely aids lecture comprehension.' },
    ],
    citation: { chapter: 'Ch 7', page: 'pp. 91–93, 102' },
    support: 'supported', discrepancy: null,
  },
  {
    id: 'al-s2',
    topicId: 'listening-academic',
    section: 'short_note',
    operator: 'explain',
    prompt: 'Explain the difference between "wide-angle" and "narrow-angle" academic listening courses, including the rationale for each.',
    spine: { shape: 'contrast', rel: 'vs',
      a: { label: 'Narrow-angle', text: 'one discipline, with that field specific language features' },
      b: { label: 'Wide-angle', text: 'a broad range of subjects, with more general language features' },
      bridge: 'Favour narrow where possible since language varies by discipline, but mixed cohorts force a wide-angle course.' },
    core: [
      { type: 'distinction',
        left:  { label: 'NARROW-ANGLE', html: 'Tightly focused on a <strong>narrow range of subject matter</strong>, often a single discipline, with that field’s <strong>specific language features</strong>.' },
        right: { label: 'WIDE-ANGLE', html: 'Focused on a <strong>broad range of subject matter</strong> and more <strong>general language features</strong> (also called “broad-angle”).' },
      },
      { type: 'prose', html: '<strong>Rationale.</strong> The chapter favours <em>narrow-angle where possible</em>, because language varies by discipline — so targeting a cohort’s exact field gives more relevant, higher-value input.' },
      { type: 'caveat', html: 'But narrow-angle is <strong>only possible with a single-discipline cohort</strong>. Heterogeneous groups (intensive English, pre-sessional, foundation programs mixing humanities, science, and business) <em>force</em> a wide-angle course. In practice the choice is usually dictated by who is in the room.' },
      { type: 'example', html: 'Single-discipline groups — say an MA cohort all studying transportation, or all plant biology — allow a genuine narrow-angle course; a foundation programme mixing humanities, science, and business students does not.' },
      { type: 'prose', html: 'A practical catch: very discipline-specific material can also outstrip a language teacher’s own subject expertise, which sometimes pushes a course back toward wide-angle.' },
    ],
    citation: { chapter: 'Ch 7', page: 'p. 95' },
    support: 'supported', discrepancy: null,
  },
  {
    id: 'al-s3',
    topicId: 'listening-academic',
    section: 'short_note',
    operator: 'justify',
    prompt: 'Justify the importance of the "Critical Dimension" for undergraduate-level L2 listeners in an academic environment.',
    spine: { shape: 'map', center: 'The critical dimension: evaluate, do not just process', payoff: 'It matters because academic study is about evaluating knowledge, not just receiving it.',
      spokes: [
        { label: 'What listeners evaluate', text: 'strength of evidence, contradictions with earlier material, lecturer bias, and social implications' },
        { label: 'Why it fits undergraduates', text: 'turns listening into academic enculturation, the core scholarly skill of judging what you hear' },
        { label: 'The gap it fills', text: 'traditional listening materials stop at comprehension and leave this out' },
      ] },
    core: [
      { type: 'def', html: 'The <strong>critical dimension</strong>: effective listeners do not simply process the messages they hear — they <strong>actively evaluate</strong> them, weighing strength of evidence, contradictions with earlier material, lecturer bias, and wider social implications.' },
      { type: 'prose', html: 'It matters for undergraduates because academic study is about <strong>evaluating knowledge, not just receiving it</strong>. The critical dimension turns listening from comprehension into genuine academic enculturation — the core scholarly skill of judging what you hear. Traditional listening materials stop at comprehension and leave this out, which is exactly the deficiency the multidimensional model is meant to fix.' },
      { type: 'example', html: 'Even a simple warm-up — debating good vs bad health practices before a lecture on the body — builds the evaluative stance the critical dimension asks for.' },
      { type: 'prose', html: 'Traditional listening models are limited in scope and leave this out, treating comprehension as the end point. But academic discourse exists to promote critical thinking and induct students into a discipline — so for undergraduates the critical dimension is not an optional extra; it is the academic skill itself.' },
    ],
    citation: { chapter: 'Ch 7', page: 'pp. 94–95, 100' },
    support: 'supported', discrepancy: null,
  },
  {
    id: 'al-s4',
    topicId: 'listening-academic',
    section: 'short_note',
    operator: 'synthesize',
    prompt: 'Synthesize how "Intertextual" and "Contextual" dimensions can be used to scaffold the transition from secondary school to English-medium universities.',
    spine: { shape: 'contrast', rel: 'vs',
      a: { label: 'Intertextual', text: 'a heard text relates to texts heard before, reusing recurring disciplinary patterns' },
      b: { label: 'Contextual', text: 'listening is integrated with reading, slides, notes, and the surrounding lecture series' },
      bridge: 'To scaffold school leavers into English-medium study, link each lecture to prior texts and wrap it in supporting reading, visuals, and discussion.' },
    core: [
      { type: 'theory', html: '<strong>Intertextual.</strong> Comprehension builds on past linguistic experience: a text we hear relates to texts heard before, and the closer the relation, the easier it is. A discipline reuses formulaic patterns (a biology lecture recycles “structure / function” phrasing), so each lecture primes the next.' },
      { type: 'theory', html: '<strong>Contextual.</strong> Listening is integrated with other skills — students listen to a lecture while viewing slides and taking notes — and each lecture in a series contextualises the one that follows.' },
      { type: 'prose', html: '<strong>Synthesis (scaffolding the transition).</strong> School leavers entering English-medium study should not decode lectures cold. Link each lecture to <em>prior texts and knowledge</em> (intertextual) and <em>wrap it in supporting reading, visuals, and discussion</em> (contextual). Together these supply the background and the recurring patterns that carry students across the gap from secondary school to the university lecture hall.' },
      { type: 'caveat', html: 'A one-off lecture is effectively decontextualised; a planned <strong>series</strong>, where each lecture primes the next, gives far stronger intertextual and contextual support — so sequencing matters as much as any single lesson.' },
    ],
    citation: { chapter: 'Ch 7', page: 'pp. 94, 100' },
    support: 'supported', discrepancy: null,
  },

  /* ═══════════════ SECTION 3 — APPLICATION ═══════════════ */
  {
    id: 'al-a1',
    topicId: 'listening-academic',
    section: 'application',
    operator: 'propose',
    prompt: 'Contextual Application: Saudi Foundation Year Programs (IEPs). Many Saudi students in "Foundation Year" programs struggle with the "speed of extensive second language monologue" and "subtechnical lexis" [1]. Using the "Individualized" and "Strategic" dimensions, propose a self-access intervention to support these students.',
    spine: { shape: 'flow', layout: 'stack', start: 'problem', end: 'outcome',
      nodes: [
        'Foundation-year students cannot decode fast extensive monologue and subtechnical lexis at lecture pace',
        { rank: [
          'Self-access lecture bank lets learners control pace and replay dense passages (individualized)',
          'Strategy toolkit trains key words, discourse structure, speaker purpose, and note-taking (strategic)',
          'Targeted self-direction guide sends each learner to their own weak spot (individualized)',
        ] },
        'Learners gain control over pace plus a portable strategy set, assessed by self-access logs and a note-taking task',
      ] },
    core: [
      { type: 'prose', html: '<strong>Problem + evidence.</strong> Foundation-year students struggle with the <em>speed of extensive monologue</em> and <em>subtechnical lexis</em> — cross-disciplinary words like <em>composition, function, procedure, relation</em> that they cannot decode at lecture pace.' },
      { type: 'theory', html: '<strong>Dimensions.</strong> The <strong>individualized</strong> dimension (each learner approaches a task uniquely — accommodate pace and style) and the <strong>strategic</strong> dimension (some ways of listening simply comprehend better, so strategies can be taught).' },
      { type: 'steps', items: [
        { step: '<strong>Self-access lecture bank.</strong> Put short video mini-lectures in a self-access centre for individual, repeated listening, so learners control the pace and replay the fast or dense passages.', why: 'Individualized — directly attacks the speed problem.' },
        { step: '<strong>Strategy toolkit.</strong> Explicitly train the strategies that beat speed and lexis: focusing on key words, recognising the lecture’s discourse structure, recognising the speaker’s purpose, and note-taking — plus pre-teaching the subtechnical vocabulary.', why: 'Strategic — attacks the lexis problem.' },
        { step: '<strong>Targeted self-direction.</strong> A self-access guide lets each learner work on their own weak spot, from sentence level to discourse level.', why: 'Individualized — focuses effort where it pays.' },
      ] },
      { type: 'prose', html: '<strong>Outcome / assessment.</strong> Learners gain control over pace plus a portable strategy set. Assess via self-access logs and a note-taking task on a recorded lecture, not a single comprehension quiz.' },
    ],
    citation: { chapter: 'Ch 7', page: 'pp. 90, 100, 102' },
    support: 'supported', discrepancy: null,
  },
  {
    id: 'al-a2',
    topicId: 'listening-academic',
    section: 'application',
    operator: 'critique',
    prompt: 'Research-Informed Pedagogy: Critical Evaluation of Materials for Saudi PhD Students. Criticize the reliance on "scripted or semi-scripted" listening materials in Saudi graduate programs [6]. Using the "Critical" and "Intertextual" dimensions, propose a model for selecting "authentic" academic listening materials.',
    spine: { shape: 'flow', layout: 'stack', start: 'problem', end: 'outcome',
      nodes: [
        'Graduate programs lean on scripted gap-fill materials stripped of real academic-speech features',
        { rank: [
          'Choose authentic recorded lectures with genuine hedging, accents, asides, and redundancy',
          'Set critical tasks on evidence, lecturer bias, and contradictions instead of gap-fill (critical)',
          'Sequence discipline-specific lecture series so recurring patterns scaffold each new lecture (intertextual)',
        ] },
        'Students engage authentic academic discourse critically, assessed by a critical response plus a synthesis with prior readings',
      ] },
    core: [
      { type: 'prose', html: '<strong>Problem + evidence.</strong> Graduate programs lean on <em>scripted or semi-scripted</em> materials; the chapter’s own textbook review found the tasks are mostly gap-fill and choose-the-answer — indistinguishable from general listening and stripped of real academic-speech features.' },
      { type: 'theory', html: '<strong>Dimensions.</strong> The <strong>critical</strong> dimension (evaluate evidence, bias, contradictions, implications) and the <strong>intertextual</strong> dimension (relate texts to prior texts; recurring disciplinary patterns).' },
      { type: 'steps', items: [
        { step: '<strong>Choose authentic lectures.</strong> Replace scripted dialogues with recorded real lectures or online university lecture archives, exposing students to genuine features — hedging, accents, asides, redundancy.', why: 'Authenticity the scripted materials lack.' },
        { step: '<strong>Set critical tasks.</strong> Require students to evaluate the lecture — strength of evidence, lecturer bias, contradictions with prior reading — rather than gap-fill.', why: 'Critical dimension — fits PhD-level work.' },
        { step: '<strong>Sequence intertextually.</strong> Run discipline-specific lecture series so recurring formulaic patterns and earlier texts scaffold each new lecture; tie lectures to the students’ wider reading.', why: 'Intertextual — prior text eases new text.' },
      ] },
      { type: 'prose', html: '<strong>Outcome / assessment.</strong> Students engage authentic academic discourse critically. Assess via a critical-response task on an authentic lecture plus a synthesis linking it to prior readings.' },
    ],
    citation: { chapter: 'Ch 7', page: 'pp. 94–95, 100–102' },
    support: 'supported', discrepancy: null,
  },

]);
