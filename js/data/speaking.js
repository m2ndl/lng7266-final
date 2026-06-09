/* ───────────────────────────────────────────────────────────────
   speaking.js — Chapter 8, "Second Language Speaking" (Anne
   Lazaraton, Celce-Murcia et al., eds., 4th ed.). Book pp. 106–118.

   The exam prompts name two researchers — H. D. Brown (2007) and
   Zhang and Head (2009) — so those names are kept; all others stripped.
   Footer = chapter · page.
   STYLE: complete sentences (prose + "why" tags); spine = terse cues.
   Word targets: Define ~70–90 | Short Note ~180–200 | Application ~190–210.
   ─────────────────────────────────────────────────────────────── */
EXAM.addQuestions([

  /* ═══════════════ SECTION 1 — DEFINE ═══════════════ */
  {
    id: 'sp-d1',
    topicId: 'speaking',
    section: 'define',
    term: 'Appropriacy',
    prompt: 'Appropriacy:',
    spine: ['Sociocultural competence / pragmatics: the "when and why" of language use', 'Not enough to be accurate + fluent — must also be socially appropriate', 'Proper politeness, directness, formality; know what NOT to say + the nonverbal', 'Most-researched area: speech acts (greeting, thanking, disagreeing)', 'Choice of form depends on social distance, status, the act itself'],
    core: [
      { type: 'def', html: '<strong>Appropriacy</strong> is sociocultural competence, or <strong>pragmatics</strong>: it is not enough for L2 speakers to be accurate and fluent — they must also use language appropriately for the social and cultural context.' },
      { type: 'prose', html: 'It means communicating with the proper politeness, directness, and formality, knowing what <em>not</em> to say, and knowing what to communicate nonverbally. Its most-researched area is <strong>speech acts</strong> — the ways people perform social functions such as greeting, thanking, and disagreeing — whose form depends on factors like social distance and status. Appropriacy answers the “when and why” of language use.' },
    ],
    citation: { chapter: 'Ch 8', page: 'p. 107' },
    support: 'supported', discrepancy: null,
  },
  {
    id: 'sp-d2',
    topicId: 'speaking',
    section: 'define',
    term: 'Authenticity',
    prompt: 'Authenticity:',
    spine: ['Whether language, materials, and tasks are real rather than artificial', '"Slippery": authentic for whom, for what purpose, in what context?', 'Two senses: authentic materials + the learner’s own "authentic voice"', 'Most published materials fall short (scripted, error-free dialogues)', 'Adults need material authentic in content AND interactional environment'],
    core: [
      { type: 'def', html: '<strong>Authenticity</strong> concerns whether the language, materials, and tasks of instruction are <strong>real rather than artificial</strong>. The construct is “slippery” — authentic for whom, for what purpose, and in what context?' },
      { type: 'prose', html: 'It has two senses: <strong>authentic teaching materials</strong>, and the learner’s own self-expression, or <strong>authentic voice</strong>. Most published speaking materials fall short, relying on scripted dialogues that are free of speaker errors and model a vague, idealised native-speaker English. Adults with real-world experience need materials that are authentic in both content and interactional environment.' },
    ],
    citation: { chapter: 'Ch 8', page: 'pp. 107–108' },
    support: 'supported', discrepancy: null,
  },
  {
    id: 'sp-d3',
    topicId: 'speaking',
    section: 'define',
    term: 'Spoken Grammar of English (SGE)',
    prompt: 'Spoken Grammar of English (SGE):',
    spine: ['The grammar of speech — uniquely different from written grammar', 'We speak in phrasal chains, not sentences (joined by "and", "but")', 'Includes forms inappropriate in writing: ellipsis, clipped forms', 'Hesitation markers (um, y’know) + discourse markers (cuz, oh)', 'A working knowledge of SGE improves fluency AND appropriacy'],
    core: [
      { type: 'def', html: 'The <strong>spoken grammar of English (SGE)</strong> is the grammar of speech, which has uniquely special qualities that distinguish it from <strong>written grammar</strong>.' },
      { type: 'prose', html: 'We do not speak in sentences but in <strong>phrasal chains</strong> joined by simple conjunctions like “and” and “but.” SGE includes forms that would be inappropriate in writing — ellipsis (“Wanna go with?”), clipped forms (“ad” for advertisement), and the ubiquitous hesitation markers (“um,” “y’know”) and discourse markers (“cuz,” “oh”). A working knowledge of SGE improves a speaker’s fluency and appropriacy.' },
    ],
    citation: { chapter: 'Ch 8', page: 'p. 108' },
    support: 'supported', discrepancy: null,
  },
  {
    id: 'sp-d4',
    topicId: 'speaking',
    section: 'define',
    term: 'Clustering',
    prompt: 'Clustering:',
    spine: ['One of H. D. Brown’s characteristics of speech complexity', 'Speech is segmented into THOUGHT GROUPS, not single words', 'Even single words may be contracted', 'Fluent speech comes out in phrasal chains', 'Learners must produce + perceive groups, not isolated words'],
    core: [
      { type: 'def', html: '<strong>Clustering</strong> is one of the characteristics that make speech complex: speech is segmented into <strong>thought groups</strong> rather than produced word by word, and even single words may be contracted.' },
      { type: 'prose', html: 'Because speakers cluster words into phrasal chains, fluent speech does not come out one isolated word at a time. Learners therefore need to produce and perceive these groups rather than single words, which is part of why speaking is described as “staggeringly complex.”' },
    ],
    citation: { chapter: 'Ch 8', page: 'p. 106' },
    support: 'supported', discrepancy: null,
  },

  /* ═══════════════ SECTION 2 — SHORT NOTE ═══════════════ */
  {
    id: 'sp-s1',
    topicId: 'speaking',
    section: 'short_note',
    operator: 'identify',
    prompt: 'Identify and describe the characteristics of speech that contribute to its "staggering complexity" as proposed by H. D. Brown (2007).',
    spine: ['H. D. Brown (2007): several features make speech complex', 'Clustering — thought groups + contractions, not single words', 'Hesitation markers + pausing', 'Colloquial language — slang and idioms', 'Suprasegmentals — stress, rhythm, intonation', 'PLUS interaction: many simultaneous demands at once'],
    core: [
      { type: 'prose', html: 'H. D. Brown (2007) identifies a set of features that together make the act of speaking <strong>“staggeringly complex.”</strong>' },
      { type: 'steps', items: [
        { step: '<strong>Clustering.</strong> Speech is segmented into thought groups rather than single words, and even single words may be contracted.', why: 'Fluent speech is produced in phrasal chains, not word by word.' },
        { step: '<strong>Hesitation markers, pausing, and colloquial language.</strong> Real speech is full of “um” and “uh,” pauses, and slang and idioms.', why: 'These features are normal in speech but absent from idealised written models.' },
        { step: '<strong>Suprasegmental features.</strong> Stress, rhythm, and intonation carry meaning across the whole utterance.', why: 'Meaning rides on more than the words themselves.' },
      ] },
      { type: 'caveat', html: 'On top of all this, speech almost always involves <strong>interaction</strong>, so multiple demands operate at once: monitoring and understanding the other speaker, planning one’s own contribution, producing it, and monitoring its effect. This simultaneity is what makes speaking so complex, and so hard to assess.' },
    ],
    citation: { chapter: 'Ch 8', page: 'p. 106' },
    support: 'supported', discrepancy: null,
  },
  {
    id: 'sp-s2',
    topicId: 'speaking',
    section: 'short_note',
    operator: 'compare',
    prompt: 'Compare and contrast "language-oriented" and "message-oriented" techniques in the teaching of oral skills.',
    spine: ['The fluency/accuracy issue → message-oriented vs language-oriented', 'MESSAGE-oriented = teaching language USE: fluency, communication, freer speech', 'LANGUAGE-oriented = teaching language USAGE: accuracy, conforming to the system, controlled', 'Balance depends on context: EFL → more fluency; ESL → more accuracy is fine', 'Rule of thumb: explicit language-focused work ≤ ~25% of contact'],
    core: [
      { type: 'distinction',
        left:  { label: 'MESSAGE-ORIENTED', html: 'Techniques that teach <strong>language use</strong>. The focus is on communicating meaning, with freer, more communicative speech and an emphasis on <strong>fluency</strong> — “operating the system quickly.”' },
        right: { label: 'LANGUAGE-ORIENTED', html: 'Techniques that teach <strong>language usage</strong>. The focus is on the form of the language, with more controlled production and an emphasis on <strong>accuracy</strong> — “conforming to the language system itself.”' },
      },
      { type: 'steps', items: [
        { step: '<strong>They sit on the fluency–accuracy divide.</strong> Message-oriented work builds fluency, while language-oriented work builds accuracy.', why: 'The choice is really about which of the two a technique prioritises.' },
        { step: '<strong>The balance depends on the setting.</strong> In EFL contexts, where out-of-class exposure is limited, fluency-based meaning-focused tasks merit more attention; in ESL contexts, more class time can go to accuracy.', why: 'Learners get extra accuracy practice on their own only when the L2 surrounds them.' },
      ] },
      { type: 'prose', html: 'A common rule of thumb is that explicitly language-focused work should be no more than about a quarter of learners’ total contact with the language. The two orientations are complementary, and a needs assessment should guide the balance for a given group.' },
    ],
    citation: { chapter: 'Ch 8', page: 'p. 107' },
    support: 'supported', discrepancy: null,
  },
  {
    id: 'sp-s3',
    topicId: 'speaking',
    section: 'short_note',
    operator: 'justify',
    prompt: 'Justify the use of student-produced transcriptions as a pedagogical tool in a speaking course.',
    spine: ['Transcription = a faithful reproduction of real talk on paper', 'Lets students "see" speech — and see that it is far from perfect', 'Keep hesitation markers, false starts, pauses; correct NOTHING', 'Builds metalinguistic awareness of real spoken features', 'Then analyse communication breakdowns and repair'],
    core: [
      { type: 'prose', html: 'Producing a great deal of language is not enough; to become competent speakers, learners must also become <strong>metalinguistically aware</strong> of the features of real spoken language. Transcribing their own recorded talk is a powerful way to build that awareness.' },
      { type: 'steps', items: [
        { step: '<strong>It lets students “see” speech.</strong> A faithful transcript — keeping hesitation markers, false starts, and pauses, and correcting nothing — gives a genuine picture of what speech is really like.', why: 'Students are often surprised that nearly everyone’s speech is far from perfect, which normalises the features of real talk.' },
        { step: '<strong>It turns talk into something analysable.</strong> From the transcript, students locate communication difficulties and work out what happened, why, and how the breakdown could have been repaired.', why: 'This develops noticing of interactional features, not just sentence-level forms.' },
        { step: '<strong>It supports both fluency and accuracy.</strong> Working on a record of their own spontaneous speech lets learners attend to accuracy without interrupting the communication itself.', why: 'The analysis happens after the talk, so fluency is not sacrificed to correction.' },
      ] },
      { type: 'prose', html: 'Research on student transcription reports gains in learners’ ability to correct their own errors, along with generally positive attitudes, which supports its use as a regular tool in the speaking class.' },
    ],
    citation: { chapter: 'Ch 8', page: 'pp. 114–115' },
    support: 'supported', discrepancy: null,
  },
  {
    id: 'sp-s4',
    topicId: 'speaking',
    section: 'short_note',
    operator: 'synthesize',
    prompt: 'Synthesize the relationship between "Appropriacy" and "Conversation Analysis (CA)" in promoting interactional competence.',
    spine: ['Appropriacy = the social fit: speech acts done with proper politeness/formality', 'CA = the structure of talk: turn-taking, sequence, repair, openings/closings', 'CA "enriches WHAT to teach and sharpens HOW to teach"', 'Interactional competence = the right social action within the real structure of talk', 'Together: appropriacy gives the social fit; CA gives the machinery'],
    core: [
      { type: 'prose', html: 'Interactional competence — being able to take part in real talk appropriately — draws on both <strong>appropriacy</strong> and <strong>conversation analysis (CA)</strong>, which supply two complementary halves.' },
      { type: 'steps', items: [
        { step: '<strong>Appropriacy supplies the social fit.</strong> It is the pragmatic competence to perform speech acts — requesting, refusing, disagreeing — with the right politeness, directness, and formality for the context.', why: 'Knowing the words is not enough; learners must perform the social action appropriately.' },
        { step: '<strong>CA supplies the structure of talk.</strong> It uncovers the systematic organisation of talk-in-interaction — turn-taking, sequence, repair, and openings and closings.', why: 'Real interaction runs on this machinery, which idealised dialogues hide.' },
        { step: '<strong>Together they inform what and how to teach.</strong> CA “enriches our knowledge of what to teach” and “sharpens our understanding of how to teach,” so the interactional practices encoded in talk can shape instruction.', why: 'Describing how real repair or turn-taking works lets teachers teach it explicitly.' },
      ] },
      { type: 'prose', html: 'In combination, appropriacy tells learners which social action to perform and how it should land, while CA shows the sequential structure within which that action must be placed. Interactional competence is the two working together in real time.' },
    ],
    citation: { chapter: 'Ch 8', page: 'pp. 107, 110' },
    support: 'supported', discrepancy: null,
  },

  /* ═══════════════ SECTION 3 — APPLICATION ═══════════════ */
  {
    id: 'sp-a1',
    topicId: 'speaking',
    section: 'application',
    operator: 'design',
    prompt: 'Contextual Application: Public Schools & Gender-Segregated Classrooms. In Saudi K-12 settings, female students are often reported to be more "reticent" and "shy" during oral activities. Drawing on the study by Zhang and Head (2009) mentioned in the chapter, propose an intervention to increase motivation and self-confidence in a 9th-grade girls\' classroom.',
    spine: ['Problem: reticence + shyness in oral activities (a known EFL challenge)', 'Zhang & Head (2009): involve students in designing the course + materials → ownership', 'their study: over a year → improved attitudes, motivation, self-confidence', 'Co-design topics + activities with the 9th-grade girls', 'Lower the threat: small groups for reticent students, clear roles, pre-taught functional language', 'Assess by participation + confidence, not error counts'],
    core: [
      { type: 'prose', html: '<strong>Problem + evidence.</strong> Reticence and shyness in oral activities are a known EFL challenge — simply getting students to speak, especially where classroom speaking norms are cautious. The study by <strong>Zhang and Head (2009)</strong> points to a student-centred remedy.' },
      { type: 'steps', items: [
        { step: '<strong>Co-design the course with the students.</strong> Following Zhang and Head (2009), involve the 9th-grade girls in choosing the topics and in creating the materials and activities they will use.', why: 'Their study found that this student-centred approach improved attitudes, motivation, and self-confidence over a year.' },
        { step: '<strong>Lower the threat of speaking.</strong> Use smaller groups for the more reticent students, assign clear roles (timekeeper, note-taker, reporter), and pre-teach the functional language for stating opinions, agreeing, and clarifying.', why: 'Reticence drops when learners know what to say and are not exposed alone.' },
        { step: '<strong>Build on their own experience and interests.</strong> Let students talk about content that is meaningful to them, and use pair and small-group tasks before whole-class speaking.', why: 'Ownership and familiar content make speaking feel worth the risk.' },
      ] },
      { type: 'prose', html: '<strong>Outcome / assessment.</strong> The aim is a greater willingness to speak, not error-free speech. Assess motivation and confidence through participation, self-assessment, and the girls’ own feedback on the course, rather than by counting errors.' },
    ],
    citation: { chapter: 'Ch 8', page: 'pp. 113, 116' },
    support: 'supported', discrepancy: null,
  },
  {
    id: 'sp-a2',
    topicId: 'speaking',
    section: 'application',
    operator: 'apply',
    prompt: 'Research-Informed Pedagogy: Critical Evaluation of Materials for Saudi Private Institutes. Many language institutes in Saudi Arabia often rely on "scripted dialogues" that are free of "speaker errors" and "hesitation markers". Critique this practice using the "Authenticity" construct and propose a model for incorporating "corpus-based" materials for adult learners.',
    spine: ['Critique via Authenticity: scripted dialogues are idealised, not real talk', 'free of speaker errors + hesitation/discourse markers; an unspecified native variety', 'Adults with real-world experience do not benefit from artificial material', 'Risk: learners never meet real SGE → avoid structures or transfer L1 forms', 'Propose corpus-based materials grounded in real spoken language', 'Simplify the task, not the text'],
    core: [
      { type: 'prose', html: '<strong>Critique.</strong> Through the <strong>authenticity</strong> construct, scripted dialogues fail on both of its senses: they are not authentic in content — they are idealised, free of speaker errors, hesitation markers, and discourse markers, and represent some unspecified native-speaker variety — and they give no room for the learner’s authentic voice. Adults who already have real-world experience do not benefit from such artificially created material.' },
      { type: 'steps', items: [
        { step: '<strong>Name the cost.</strong> Because the dialogues hide real spoken grammar, learners never meet the features of genuine talk, and so may avoid certain structures or transfer non-idiomatic forms from Arabic.', why: 'You cannot learn to handle real conversation from speech that has been cleaned of everything that makes it real.' },
        { step: '<strong>Replace them with corpus-based materials.</strong> Use materials grounded in large spoken corpora, which teach the expressions, spoken grammar, and conversation strategies that actually occur — including the high-frequency markers the scripts omit.', why: 'Corpus evidence shows what real speakers actually say, so the input is authentic in content.' },
        { step: '<strong>Keep the input authentic but stage the task.</strong> Rather than simplifying the text, simplify the task: give adults real spoken samples and graded things to do with them.', why: 'Adults need material authentic in both content and interactional environment, with difficulty controlled by the task.' },
      ] },
      { type: 'prose', html: '<strong>Outcome.</strong> The institutes’ adult learners then meet real spoken English and the features that scripted dialogues strip out, building genuine speaking competence. Evaluate any candidate textbook by asking whether it requires authentic language use, and how you can tell.' },
    ],
    citation: { chapter: 'Ch 8', page: 'pp. 107–108' },
    support: 'supported', discrepancy: null,
  },

]);
