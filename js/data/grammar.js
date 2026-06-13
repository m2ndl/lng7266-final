/* ───────────────────────────────────────────────────────────────
   grammar.js — Chapter 17, "Teaching Grammar" (Diane Larsen-Freeman,
   Celce-Murcia et al., eds., 4th ed.). Book pp. 256–270.

   Author names are stripped throughout EXCEPT the two the exam
   prompts themselves name: Larsen-Freeman and Ellis (CR).
   Word targets: Define ~70–90 | Short Note ~190–210 | Application ~190–210.
   One guide anomaly preserved + flagged: the 3rd Define term
   "grammaticalization" is NOT defined in this chapter (orphan term).
   ─────────────────────────────────────────────────────────────── */
EXAM.addQuestions([

  /* ═══════════════ SECTION 1 — DEFINE ═══════════════ */
  {
    id: 'gr-d1',
    topicId: 'grammar',
    section: 'define',
    term: 'Grammaring',
    prompt: 'Grammaring:',
    spine: { shape: 'map', center: 'Grammaring (Larsen-Freeman, 2003)', payoff: 'It treats grammar as a skill to be used, which solves the inert knowledge problem where learners know rules but never apply them.',
      spokes: [
        { label: 'A skill, not a rule-set', text: 'adding "-ing" reframes grammar as dynamic grammar-using rather than a static body of rules' },
        { label: 'The threefold criterion', text: 'using grammatical constructions accurately, meaningfully, and appropriately' },
        { label: 'How it is learned', text: 'meaningful practice under psychologically authentic conditions that match the conditions of use' },
      ] },
    core: [
      { type: 'def', html: '<strong>Grammaring</strong> is the ability to use grammatical constructions <strong>accurately, meaningfully, and appropriately</strong>. Adding “-ing” to <em>grammar</em> reframes it as a dynamic process of grammar-<em>using</em>, not a static body of rules.' },
      { type: 'prose', html: 'Larsen-Freeman proposes grammaring as the proper goal of grammar instruction. It addresses the <strong>“inert knowledge problem”</strong> — students know the rules but do not apply them when communicating. To <em>grammar</em>, learners must practise meaningful use under “psychologically authentic” conditions, where the conditions of learning match the conditions of use — not merely notice or transform forms.' },
    ],
    expansion: ['It treats grammar as a <em>dynamic system</em> (a “fifth skill”), not a fixed set of rules. “Creative automatization” practises the patterned sequences that occur naturally in real communicative contexts, such as <em>My washer needs fixing</em>.'],
    citation: { chapter: 'Ch 17', page: 'pp. 263–264' },
    support: 'supported', discrepancy: null,
  },
  {
    id: 'gr-d2',
    topicId: 'grammar',
    section: 'define',
    term: 'Consciousness-Raising (CR)',
    prompt: 'Consciousness-Raising (CR):',
    spine: { shape: 'map', center: 'Consciousness-raising (CR) task', payoff: 'It raises awareness and primes noticing without demanding immediate production.',
      spokes: [
        { label: 'Explicit but inductive', text: 'the students induce the grammatical generalization from the language data they are given' },
        { label: 'How it runs', text: 'learners examine where a pattern does and does not work, then work the rule out themselves' },
        { label: 'When it fits best', text: 'constructions that are difficult or not clear-cut, in Ellis\'s account' },
        { label: 'Worked example', text: 'Fotos and Ellis (1991) had learners derive the indirect-object alternation rule' },
      ] },
    core: [
      { type: 'def', html: 'A <strong>consciousness-raising (CR) task</strong> is an explicit grammar activity in which it is the <strong>students’ job to induce a grammatical generalization</strong> from the language data they are given.' },
      { type: 'prose', html: 'It is <strong>inductive</strong>: rather than receiving a rule and applying it, learners examine examples — where a pattern does and does not work — and work the rule out themselves. Ellis treats this as ideal for constructions that are <strong>difficult or not clear-cut</strong>; Fotos and Ellis (1991) had learners derive the rule for indirect-object alternation (<em>They gave a watch to him / They gave him a watch</em>). CR raises awareness and primes noticing without demanding immediate production.' },
    ],
    expansion: ['It nurtures a way of thinking, because learners reach their own generalizations, and it lets the teacher see what students already know. It also pairs naturally with collaborative dialogue, where learners scaffold each other by discussing the rule.'],
    citation: { chapter: 'Ch 17', page: 'p. 265' },
    support: 'supported', discrepancy: null,
  },
  {
    id: 'gr-d3',
    topicId: 'grammar',
    section: 'define',
    term: 'Grammaticalization',
    prompt: 'Grammaticalization:',
    spine: { shape: 'list', items: [
      'In the developmental sense, grammaticalization is the process by which a learner\'s interlanguage gradually acquires grammatical form.',
      'Meaning-driven output becomes progressively more structured and accurate as the learner\'s system restructures over time.',
      'This rests on the usage-based claim that grammar is dynamic and emerges from use: repeated lexicogrammatical sequences become sedimented as fixed or semi-fixed patterns.',
      'In general linguistics the same term also names the diachronic process by which a lexical item becomes a grammatical marker, as in going to becoming the future gonna.',
    ] },
    core: [
      { type: 'flag', html: '<strong>Term not defined in the assigned chapter.</strong> “Grammaticalization” does not appear in Larsen-Freeman’s Ch 17, so the term identity is inferred. Because this is a <em>teaching</em> chapter in Larsen-Freeman’s list, the likely intended sense is the <strong>learner-developmental</strong> one (below), with the general-linguistics sense as a secondary note.' },
      { type: 'def', html: '<strong>Grammaticalization</strong> (developmental sense) is the process by which a learner’s <strong>interlanguage gradually acquires grammatical form</strong>: meaning-driven output becomes progressively more structured and accurate as the learner’s system restructures over time.' },
      { type: 'prose', html: 'This rests on the chapter’s <strong>usage-based</strong> claim that grammar is dynamic and <em>emerges from use</em> — through repeated use, lexicogrammatical sequences become “sedimented” as fixed or semi-fixed patterns. (In general linguistics the same term also names the <em>diachronic</em> process by which a lexical item becomes a grammatical marker — e.g. <em>going to</em> → the future <em>gonna</em> — but the learner-development reading is the one this chapter points to.)' },
    ],
    citation: { chapter: 'Ch 17', page: 'cf. p. 257 (emergence)' },
    support: 'partial',
    discrepancy: 'Grammaticalization is not defined in Ch 17 (Larsen-Freeman); the term identity is inferred. Read here in the learner-developmental sense (grounded in the chapter’s usage-based “grammar emerges from use” passage), with the diachronic linguistics sense as a secondary note.',
  },

  /* ═══════════════ SECTION 2 — SHORT NOTE ═══════════════ */
  {
    id: 'gr-s1',
    topicId: 'grammar',
    section: 'short_note',
    operator: 'identify',
    prompt: 'Identify and describe the three dimensions of grammar instruction as proposed by Larsen-Freeman (2002).',
    spine: { shape: 'map', center: 'Larsen-Freeman pie chart of grammar', payoff: 'The wedges have permeable boundaries and interact, so the teacher identifies which dimension is the learning challenge and targets practice there.',
      spokes: [
        { label: 'Form', text: 'how it is formed: the morphosyntactic patterns, with sound and spelling where relevant' },
        { label: 'Meaning', text: 'what it means, whether the sense is lexical or grammatical' },
        { label: 'Use', text: 'when and why a speaker chooses it: the social context and discourse co-text' },
      ] },
    core: [
      { type: 'prose', html: 'Larsen-Freeman represents grammar as a <strong>pie chart</strong> with three interacting dimensions, each occupying one <strong>wedge</strong> (her term for a slice of the pie). Any construction can be described by all three, and a teacher begins by asking the question posed in each wedge.' },
      { type: 'steps', items: [
        { step: '<strong>Form</strong> — “How is it formed?” The overt morphosyntactic and lexicogrammatical patterns: word structure and sequence, and where relevant the sound (phonemic) and spelling (graphemic) patterns.', why: 'This is the visible shape of the construction.' },
        { step: '<strong>Meaning</strong> — “What does it mean?” The meaning can be <em>lexical</em> (a dictionary sense) or <em>grammatical</em> (e.g. the conditional signals a condition and its result).', why: 'This is what the construction signifies.' },
        { step: '<strong>Use</strong> — “When/Why is it used?” The pragmatics: why a speaker chooses this construction over another with the same meaning, governed by the social context and the linguistic discourse co-text.', why: 'This dimension governs appropriacy in context.' },
      ] },
      { type: 'caveat', html: 'The boundaries are <strong>permeable</strong> (bidirectional arrows), so the dimensions interact. The payoff is diagnostic: the teacher identifies <em>which</em> dimension is the learning challenge for a given group and targets practice there — form is not always the hardest part (for phrasal verbs, <em>meaning</em> is).' },
    ],
    expansion: ['Mapping a construction across the three wedges reveals its scope and guides what to teach and when. The same chart also diagnoses errors — confusion often lies in <em>use</em>, not form.'],
    citation: { chapter: 'Ch 17', page: 'pp. 257–259' },
    support: 'supported', discrepancy: null,
  },
  {
    id: 'gr-s2',
    topicId: 'grammar',
    section: 'short_note',
    operator: 'justify',
    prompt: 'Justify the teaching of grammar as a "skill" (grammaring) rather than a "set of rules."',
    spine: { shape: 'flow', layout: 'stack',
      nodes: [
        'Teaching rules alone yields the inert knowledge problem: learners know the rule but do not deploy it when communicating',
        'Larsen-Freeman holds that grammar is a dynamic system, so the goal is grammaring rather than a static rule-set',
        'A skill must be practised in use under psychologically authentic conditions where learning matches use',
        'Producing output pushes learners to test hypotheses and get feedback, building a usable system',
        'The payoff is grammaring: using constructions accurately, meaningfully, and appropriately',
      ],
      note: 'This does not abolish rules; giving a rule is one legitimate way to teach form, but a course that stops at rules leaves learners ill-served.' },
    core: [
      { type: 'prose', html: 'Teaching grammar as a fixed <strong>set of rules</strong> produces the <strong>“inert knowledge problem”</strong>: students know the rule but do not deploy it when communicating. Larsen-Freeman argues grammar is a <strong>dynamic system</strong>, so the goal should be <em>grammaring</em> — the skill of using constructions accurately, meaningfully, and appropriately.' },
      { type: 'steps', items: [
        { step: 'Rules alone do not transfer. There is little connection between formal knowledge of rules and the ability to use them; a steady diet of mechanical drills leaves learners “at a loss” when they must actually communicate.', why: 'This is the carry-over, or inert-knowledge, problem.' },
        { step: 'A skill must be practised in use. Learners need meaningful production under “psychologically authentic” conditions, where the conditions of learning match the conditions of use (transfer-appropriate processing).', why: 'Skills automatize through use, not memorization.' },
        { step: 'Output drives acquisition. Producing constructions pushes learners from semantic to syntactic processing and lets them test hypotheses and receive feedback.', why: 'This builds a usable system rather than inert knowledge.' },
      ] },
      { type: 'caveat', html: 'This does <em>not</em> abolish rules — giving a rule is one legitimate way to teach form — but a course that stops at rules is, in Larsen-Freeman’s words, “ill-served.” Grammaring keeps form in the service of meaning and use.' },
    ],
    citation: { chapter: 'Ch 17', page: 'pp. 256–257, 263–264' },
    support: 'supported', discrepancy: null,
  },
  {
    id: 'gr-s3',
    topicId: 'grammar',
    section: 'short_note',
    operator: 'compare',
    prompt: 'Compare the "Rule-governed" and "Reason-governed" aspects of grammar as discussed by Larsen-Freeman.',
    spine: { shape: 'contrast', rel: 'vs',
      a: { label: 'Rule-governed', text: 'form-based rules to memorize that often seem arbitrary and add a rote burden, though they give some security' },
      b: { label: 'Reason-governed', text: 'meaning- and use-based logic of broader scope that gives deeper understanding so learners make it their own' },
      bridge: 'The point is to teach reasons, not only rules: for existential there, the reason is that both there and the indefinite a mark new information, explaining a range of word-order phenomena.' },
    core: [
      { type: 'distinction',
        left:  { label: 'RULE-GOVERNED', html: 'Grammar is presented as <strong>rules to memorize and apply</strong>. Many such rules <em>appear arbitrary</em> because they are form-based, ignoring the meaning and use dimensions. They add a <strong>rote-learning burden</strong>, though they do give learners some security.' },
        right: { label: 'REASON-GOVERNED', html: 'Grammar is explained by the <strong>reason behind the form</strong>. Reasons are <strong>meaning- and use-based</strong>, have broader scope, and tap learners’ cognitive powers — giving a deeper understanding of the logic of English so learners can <em>make it their own</em>.' },
      },
      { type: 'example', html: 'For existential <em>there</em> (“There is a snowstorm coming”), the rule “use an indefinite noun phrase after <em>there</em>” seems arbitrary. The <strong>reason</strong>: the function of <em>there</em> is to introduce <strong>new information</strong>, and the indefinite article <em>a</em> marks new information — which is why <em>a</em> precedes <em>snowstorm</em>. This one reason explains a range of English word-order phenomena.' },
      { type: 'prose', html: 'The point is not to abolish rules but to teach <strong>“reasons, not only rules.”</strong> Reasons fit the richer, dynamic view of grammar — form in service of meaning and use — and explain more with less rote memorization, provided the reason is presented comprehensibly.' },
    ],
    citation: { chapter: 'Ch 17', page: 'p. 268' },
    support: 'supported', discrepancy: null,
  },
  {
    id: 'gr-s4',
    topicId: 'grammar',
    section: 'short_note',
    operator: 'synthesize',
    prompt: 'Synthesize how "Input Processing" and "Noticing" contribute to the development of a learner\'s interlanguage.',
    spine: { shape: 'flow', layout: 'stack',
      lead: 'The interlanguage is the learner\'s developing L2 system, which advances by restructuring',
      nodes: [
        'Attention is limited, so constructions slip past learners who are busy communicating',
        { rank: [
          'Noticing: input enhancement and input flooding make a construction salient enough to register',
          'Input processing: tasks push attention to form while processing meaning, targeting L1 to L2 differences',
        ] },
        'Restructuring: learners notice the gap with the target, revise their hypotheses, and the system reorganizes',
      ],
      note: 'Both work by managing attention rather than handing over rules; they accelerate natural acquisition, though gains may be delayed until the learner is developmentally ready.' },
    core: [
      { type: 'prose', html: 'An <strong>interlanguage</strong> is the learner’s developing L2 system, which advances by <strong>restructuring</strong> as learners test and revise hypotheses. Both <em>noticing</em> and <em>input processing</em> feed that development by controlling where limited attention goes.' },
      { type: 'steps', items: [
        { step: '<strong>Noticing.</strong> Because attention is limited, constructions slip past learners who are busy communicating. Drawing attention to form — input <em>enhancement</em> (highlighting) and input <em>flooding</em> (texts saturated with the target) — makes a construction salient enough to register.', why: 'Nothing enters the system that is not first noticed.' },
        { step: '<strong>Input processing.</strong> Tasks push learners to attend to form <em>while processing meaning</em>, using examples chosen to make L1–L2 differences salient (e.g. contrasting “The man is looking for you” with “You are looking for the man” via pictures).', why: 'This re-routes how learners parse the input and corrects faulty form-meaning mappings.' },
        { step: '<strong>Restructuring.</strong> Once a feature is noticed, learners can “notice the gap” between their own output and the target, revise their hypotheses, and the interlanguage reorganizes.', why: 'This is how the system changes, not merely accumulates.' },
      ] },
      { type: 'caveat', html: 'Both work by <strong>managing attention</strong>, not by handing over rules; they <em>accelerate</em> natural acquisition rather than replace it. Gains may be delayed — instruction can prime noticing that only pays off once the learner is developmentally ready.' },
    ],
    citation: { chapter: 'Ch 17', page: 'pp. 263, 266–267' },
    support: 'supported', discrepancy: null,
  },

  /* ═══════════════ SECTION 3 — APPLICATION ═══════════════ */
  {
    id: 'gr-a1',
    topicId: 'grammar',
    section: 'application',
    operator: 'design',
    prompt: 'Contextual Application: Overcoming "The Rule of Three" in Saudi K-12 Schools. In many Saudi public schools, grammar is taught through a "deductive" approach (teacher gives rule, students do exercises). Using Larsen-Freeman\'s Three Dimensions, design an "inductive" intervention for teaching the "Present Perfect" to 11th-grade students that moves beyond simple "Form" (have/has + V3).',
    spine: { shape: 'flow', layout: 'stack', start: 'problem', end: 'outcome',
      lead: 'Larsen-Freeman\'s three dimensions, taught inductively (consciousness-raising)',
      nodes: [
        'The deductive have/has plus V3 drill teaches only the Form wedge, so learners can conjugate the present perfect but cannot choose it',
        'Meaning: students induce from matched pairs and timelines that the present perfect links the past to now',
        'Use: role plays force a choice between present perfect and simple past, so students notice why it is selected',
        'Form: a "Find someone who has..." mingling survey produces have/has plus V3 many times to complete a real task',
        'Learners leave able to use the present perfect appropriately, assessed by a communicative task rather than a gap-fill',
      ] },
    core: [
      { type: 'prose', html: '<strong>Problem + evidence.</strong> The deductive “state the rule, then do the exercises” routine — here, “have/has + V3” — is the <em>“Rule of Three”</em> the prompt targets: it teaches only the <strong>Form</strong> wedge, so learners can <em>conjugate</em> the present perfect but cannot <em>choose</em> it. Larsen-Freeman’s three dimensions show the real challenge lies in <strong>Meaning</strong> and <strong>Use</strong>, and an <strong>inductive</strong> (consciousness-raising) design targets them.' },
      { type: 'steps', items: [
        { step: '<strong>Meaning (inductive).</strong> Give 11th-graders matched pairs in context — “I have lived in Riyadh for ten years” vs “I lived in Riyadh for ten years” — with simple timelines. In pairs they induce the difference: the present perfect links the past to <em>now</em> (still true / present result).', why: 'Learners derive the meaning themselves instead of receiving a rule.' },
        { step: '<strong>Use (role play).</strong> Set contexts that force a choice between present perfect and simple past — a news flash, or “Have you ever…?” experience-sharing. Students notice <em>why</em> the present perfect is selected (relevance now, unspecified time).', why: 'This targets the pragmatic Use dimension that the drill ignored.' },
        { step: '<strong>Form (meaningful iteration).</strong> A “Find someone who has… (travelled abroad / broken a bone)” mingling survey makes students produce <em>have/has + V3</em> many times to complete a real task.', why: 'This automatizes the form in service of meaning rather than in isolation.' },
      ] },
      { type: 'prose', html: '<strong>Outcome / assessment.</strong> Learners leave able to <em>use</em> the present perfect appropriately, not just form it. Assess with the survey report or a short experience narrative — a communicative task — rather than a gap-fill, in keeping with <em>grammaring</em>.' },
    ],
    citation: { chapter: 'Ch 17', page: 'pp. 258–259, 264–265, 268' },
    support: 'supported', discrepancy: null,
  },
  {
    id: 'gr-a2',
    topicId: 'grammar',
    section: 'application',
    operator: 'apply',
    prompt: 'Cultural & Linguistic Analysis: Negative Transfer and the "Verb to Be". Arabic L1 learners frequently omit the "copula" (verb to be) in sentences like "He is a teacher" (yielding "He teacher"). Based on Ellis\'s Consciousness-Raising (CR) framework, propose a task to help Saudi university students "notice" this "hidden" grammatical feature.',
    spine: { shape: 'flow', layout: 'stack', start: 'problem', end: 'outcome',
      lead: 'Ellis\'s consciousness-raising framework: inductive, explicit, awareness-raising',
      nodes: [
        'Arabic has no present-tense copula, so learners transfer "He teacher"; the copula also carries little meaning and has low salience',
        'Data set: students sort grammatical and ungrammatical sentences and induce that English requires a form of be',
        'Enhance input and contrast L1 with L2: highlight every copula and set the Arabic nominal sentence against its English counterpart',
        'Notice the gap: students check their own writing or speech against the target and self-correct with focused negative evidence',
        'Students consciously notice and monitor the copula, assessed by an editing task plus monitored production rather than a fluency test',
      ] },
    core: [
      { type: 'flag', html: '<strong>Framework note.</strong> The prompt names <strong>Ellis’s CR framework</strong>. CR is inductive and explicit — learners discover the rule from data — which suits a <em>low-salience</em> feature like the copula.' },
      { type: 'prose', html: '<strong>Why it is “hidden.”</strong> Arabic forms nominal sentences with <strong>no present-tense copula</strong> (“He teacher” is well-formed in Arabic), so learners transfer that pattern; and the copula carries almost no meaning, so it has <strong>low salience</strong> and slips past attention. Mere exposure is not enough — attention must be directed to it.' },
      { type: 'steps', items: [
        { step: '<strong>Data → induce the rule.</strong> Give students a set of English sentences, some with and some without the copula (marked grammatical / ungrammatical), and have them work out the rule that English <em>requires</em> a form of <em>be</em> in such sentences — a CR task modelled on Fotos and Ellis (1991).', why: 'Learners derive the hidden rule themselves.' },
        { step: '<strong>Enhance input + contrast L1/L2.</strong> Highlight every copula in a short text and explicitly contrast the Arabic nominal sentence (no copula) with its obligatory English counterpart.', why: 'This makes the negative transfer visible and the form salient.' },
        { step: '<strong>Notice the gap + feedback.</strong> Students check their own writing, or a transcript of their speech, against the target, find the omissions, and self-correct — with focused negative evidence from the teacher.', why: 'This closes the gap between the interlanguage and the target.' },
      ] },
      { type: 'prose', html: '<strong>Outcome / assessment.</strong> Students consciously notice and monitor the copula; CR raises awareness without demanding fluent production. Assess with an <em>editing task</em> (repair copula omissions) plus monitored production, not a one-off fluency test.' },
    ],
    citation: { chapter: 'Ch 17', page: 'pp. 262–263, 265–266' },
    support: 'supported', discrepancy: null,
  },

]);
