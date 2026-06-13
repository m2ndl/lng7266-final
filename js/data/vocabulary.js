/* ───────────────────────────────────────────────────────────────
   vocabulary.js — Chapter 19, "Teaching and Learning Vocabulary for
   Second Language Learners" (Cheryl Boyd Zimmerman, Celce-Murcia
   et al., eds., 4th ed.). Book pp. 288–302.

   SOURCE-MAP NOTE: the guide attributes this chapter to "Paul Nation."
   The chapter is by ZIMMERMAN; the "four strands" and "fluency
   development" it cites ARE Nation's framework (see topics.js flag).
   Author names are stripped EXCEPT the one the exam prompts name —
   Nation. Word targets: Define ~70–90 | Short Note ~190–210 |
   Application ~190–210.

   GUIDE ANOMALIES preserved + flagged:
   - The Short-Answer list skips #1 (it runs 2, 3, 4). No content is
     missing — it is a numbering gap; the three items below are the pool.
   - "Keyword Technique" (3rd Define term) is NOT defined in Ch 19 —
     orphan term, flagged in vc-d2 below.
   ─────────────────────────────────────────────────────────────── */
EXAM.addQuestions([

  /* ═══════════════ SECTION 1 — DEFINE ═══════════════ */
  {
    id: 'vc-d1',
    topicId: 'vocabulary',
    section: 'define',
    term: 'The Four Strands',
    prompt: 'The Four Strands:',
    spine: { shape: 'map', center: 'Nation: four strands', payoff: 'A balanced course gives each strand roughly equal time, balancing meaning and form.',
      spokes: [
        { label: 'Meaning-focused input', text: 'picking up words while listening or reading for meaning' },
        { label: 'Meaning-focused output', text: 'picking up words while speaking or writing for meaning' },
        { label: 'Language-focused learning', text: 'deliberate study of items such as word parts and word cards' },
        { label: 'Fluency development', text: 'getting faster at using words already known' },
      ] },
    core: [
      { type: 'def', html: 'The <strong>four strands</strong> are Nation’s framework for a balanced language course: (1) <strong>meaning-focused input</strong>, (2) <strong>meaning-focused output</strong>, (3) <strong>language-focused learning</strong>, and (4) <strong>fluency development</strong> — each given roughly equal time.' },
      { type: 'prose', html: 'The strands balance <strong>meaning and form</strong>. Two are meaning-focused (picking up vocabulary while reading/listening, and while speaking/writing); one is the <strong>deliberate</strong>, language-focused study of items (e.g. word parts, word cards); and one builds <strong>fluency</strong> in using words already known. The point is variety — learners need chances to meet words, to produce them, and to focus on both form and meaning.' },
    ],
    expansion: ['This rests on the split between <em>incidental</em> learning (words picked up while attention is on the message) and <em>intentional or explicit</em> learning (focused study). Form, collocation, and word class are often picked up incidentally, while meaning, register, and constraints on use usually need explicit attention.'],
    citation: { chapter: 'Ch 19', page: 'p. 292' },
    support: 'supported', discrepancy: null,
  },
  {
    id: 'vc-d2',
    topicId: 'vocabulary',
    section: 'define',
    term: 'Keyword Technique',
    prompt: 'Keyword Technique:',
    spine: { shape: 'list', items: [
      'A mnemonic strategy for learning a word meaning in two steps.',
      'First, find a first-language keyword that sounds like part of the target word.',
      'Then form a vivid mental image linking that keyword to the target word meaning.',
      'For Spanish "mesa" (table), pick the keyword "mess" and picture a table covered in a mess.',
    ] },
    core: [
      { type: 'flag', html: '<strong>Term not defined in the assigned chapter.</strong> The keyword technique is not described in Zimmerman’s Ch 19; it belongs to the word-learning-strategy literature (Nation). The definition below is the standard one — study it, but know it is an orphan term.' },
      { type: 'def', html: 'The <strong>keyword technique</strong> is a <strong>mnemonic strategy</strong> for learning a word’s meaning in two steps: find a first-language <strong>“keyword” that sounds like</strong> part of the target word, then form a <strong>vivid mental image</strong> linking that keyword to the target word’s meaning.' },
      { type: 'prose', html: 'For example, to learn Spanish <em>mesa</em> (table), an English speaker picks the keyword “mess” and pictures a table covered in a mess. It exploits sound and imagery to fix the form-meaning link, and fits Nation’s <strong>language-focused (deliberate)</strong> strand as one of several strategies that make learners agents of their own word learning.' },
    ],
    citation: { chapter: 'Ch 19', page: 'cf. p. 297 (strategies)' },
    support: 'partial',
    discrepancy: 'The keyword technique is not defined in Ch 19 (Zimmerman). The definition is the standard mnemonic-strategy one, consistent with Nation’s word-learning-strategy framework that the chapter cites.',
  },
  {
    id: 'vc-d3',
    topicId: 'vocabulary',
    section: 'define',
    term: 'Fluency Development',
    prompt: 'Fluency Development:',
    spine: { shape: 'map', center: 'Fluency development: Nation fourth strand', payoff: 'The job is speed of access, not breadth: the words are already known.',
      spokes: [
        { label: 'Goal', text: 'become faster and more confident with words already known, adding none' },
        { label: 'Material', text: 'easy, familiar, high-frequency content that stays meaning-focused' },
        { label: 'Conditions', text: 'all four skills, typically under time pressure with repetition' },
        { label: 'Level of practice', text: 'the discourse or fluency level, using longer content-rich segments' },
      ] },
    core: [
      { type: 'def', html: '<strong>Fluency development</strong> is the strand of Nation’s four strands in which learners become <strong>faster and more confident at using language they already know</strong> — adding no new vocabulary, but increasing the speed and ease of access.' },
      { type: 'prose', html: 'It uses <strong>easy, familiar (high-frequency)</strong> material, stays <strong>meaning-focused</strong>, and runs across all four skills, typically with <strong>time pressure and repetition</strong>. In the chapter it is the <em>discourse / fluency level</em> of practice, where words are used in longer, content-rich segments with attention to fluency alongside accuracy.' },
    ],
    expansion: ['It contrasts with the <em>word level</em> (items in isolation) and the <em>sentence level</em> (collocations and grammatical forms). Fluency development assumes the words are already known, so its job is speed rather than breadth.'],
    citation: { chapter: 'Ch 19', page: 'pp. 292, 295' },
    support: 'supported', discrepancy: null,
  },

  /* ═══════════════ SECTION 2 — SHORT NOTE ═══════════════
     Guide numbers these 2, 3, 4 (it skips #1 — a numbering gap, not
     missing content). All three are in the study pool. */
  {
    id: 'vc-s1',
    topicId: 'vocabulary',
    section: 'short_note',
    operator: 'explain',
    prompt: 'Explain the distinction between "high-frequency" and "low-frequency" words and the pedagogical implications for each.',
    spine: { shape: 'contrast', rel: 'vs',
      a: { label: 'High-frequency', text: 'the 2,000 most-frequent families that cover most text, so teach them directly' },
      b: { label: 'Low-frequency', text: 'the rare long tail, too many to teach, so train word-learning strategies' },
      bridge: 'The Academic Word List of about 570 families sits between them: high-frequency within academic texts, so worth teaching directly for university-bound learners.' },
    core: [
      { type: 'distinction',
        left:  { label: 'HIGH-FREQUENCY', html: 'These are the small set of <strong>most-frequent</strong> words. The General Service List is the <strong>2,000 word families</strong> that make up at least <strong>80% of written texts and 90% of conversation</strong>. “The most important words in any language are those that are most frequent.”' },
        right: { label: 'LOW-FREQUENCY', html: 'These are the very large <strong>remainder</strong>. Any single word is rare, and there are <strong>far too many to teach one by one</strong> in class.' },
      },
      { type: 'steps', items: [
        { step: '<strong>Teach high-frequency words directly.</strong> Because so few words give so much coverage, they repay deliberate class time — explicit teaching, repetition, and production.', why: 'This gives the best return on limited instructional time.' },
        { step: '<strong>Equip learners for low-frequency words.</strong> There are too many to teach, so train word-learning strategies — guessing from context, analysing word parts, using a dictionary — so learners handle them independently.', why: 'Strategies, not coverage, are the realistic tool.' },
      ] },
      { type: 'prose', html: 'Academic vocabulary sits in between: the <strong>Academic Word List</strong> (≈570 word families not on the GSL) is “high-frequency” <em>within academic texts</em>, so for university-bound learners it is worth teaching directly. Frequency is one of three guides to word selection, alongside a word’s <em>salience</em> in the content and <em>corpus</em> evidence.' },
    ],
    expansion: ['Coverage drives this: learners need to know roughly <strong>98%</strong> of a text’s running words to read it — about <strong>8,000–9,000 word families</strong> for novels/newspapers, 6,000–7,000 for speech. This is the source of the “beginner’s paradox.”'],
    citation: { chapter: 'Ch 19', page: 'pp. 293–294, 297' },
    support: 'supported', discrepancy: null,
  },
  {
    id: 'vc-s2',
    topicId: 'vocabulary',
    section: 'short_note',
    operator: 'compare',
    prompt: 'Compare and contrast "Meaning-focused Input" and "Meaning-focused Output" in the context of vocabulary acquisition.',
    spine: { shape: 'contrast', rel: 'vs',
      a: { label: 'Meaning-focused input', text: 'receptive: picking words up while listening or reading, needing about 98 percent coverage' },
      b: { label: 'Meaning-focused output', text: 'productive: learning words through speaking and writing, which drives deeper processing' },
      bridge: 'Both keep attention on the message, so learning is incidental; they are complementary, as input supplies exposure and output consolidates the words learners can actually use.' },
    core: [
      { type: 'distinction',
        left:  { label: 'MEANING-FOCUSED INPUT', html: 'This means learning words <strong>incidentally while listening or reading</strong> for meaning (receptive). Much vocabulary growth comes from reading, but it requires knowing ~<strong>98%</strong> of the running words — the <strong>“beginner’s paradox”</strong>: you must read to learn words, yet need words to read.' },
        right: { label: 'MEANING-FOCUSED OUTPUT', html: 'This means learning words through <strong>speaking and writing</strong> for meaning (productive). Producing a word forces attention to its form and use, so learners acquire the words they actually <em>use</em>.' },
      },
      { type: 'steps', items: [
        { step: '<strong>Input is receptive and depends on coverage.</strong> New words are met in context and picked up gradually, so it works best with texts the learner can already nearly read.', why: 'Below ~98% coverage, guessing from context breaks down.' },
        { step: '<strong>Output is productive and drives deeper processing.</strong> Newton (1995) found learners acquired the words they used in interaction, while words seen only on worksheets showed no gain; using a word in writing aids retention more than only reading it.', why: 'Production requires manipulating the word, which fixes it.' },
      ] },
      { type: 'prose', html: 'Both are <strong>“meaning-focused”</strong> — attention is on the message, so learning is incidental — and together they are two of Nation’s four strands. They are <strong>complementary</strong>: input supplies exposure to many words; output consolidates the words learners can actually use.' },
    ],
    citation: { chapter: 'Ch 19', page: 'pp. 291–292, 296' },
    support: 'supported', discrepancy: null,
  },
  {
    id: 'vc-s3',
    topicId: 'vocabulary',
    section: 'short_note',
    operator: 'justify',
    prompt: 'Justify the use of "Deliberate Vocabulary Learning" (e.g., word cards) over purely "Incidental Learning."',
    spine: { shape: 'contrast', rel: 'vs',
      a: { label: 'Purely incidental', text: 'slow and uncertain: needs about 98 percent coverage and ten or more encounters, and misses some features' },
      b: { label: 'Deliberate word cards', text: 'efficient and learner-paced, using retrieval and spaced repetition to build from receptive to productive' },
      bridge: 'This does not replace incidental learning, which stays essential; the deliberate language-focused strand works alongside it so high-frequency words are actually learned.' },
    core: [
      { type: 'prose', html: 'A <strong>purely incidental</strong> approach is slow and leaves too much to chance: learners need to know about <strong>98%</strong> of a text’s words to pick up the rest, and a single word takes <strong>many encounters</strong> — ten or more just for gains, more for full knowledge. Some features (meaning, register, constraints on use) are <strong>missed entirely</strong> when attention is on the message, so they need deliberate attention.' },
      { type: 'steps', items: [
        { step: '<strong>Word cards are efficient.</strong> They give focused practice in little time, are portable, and are learner-paced.', why: 'This is a high return for the time invested.' },
        { step: '<strong>They use retrieval and spaced repetition.</strong> Learners recall meaning <em>from</em> form (not just re-read), and review is spaced — close encounters first, then widening intervals — which research links to longer retention.', why: 'Retrieval and spacing are what make memory durable.' },
        { step: '<strong>They build from receptive to productive.</strong> Start with the target word and its translation, then add a sentence, collocations, a picture; learn to recognise first, then to use.', why: 'This mirrors the incremental growth of word knowledge.' },
      ] },
      { type: 'prose', html: 'This is <em>not</em> an argument against incidental learning, which remains essential — it is Nation’s <strong>language-focused</strong> strand working alongside the meaning-focused ones, ensuring that high-frequency words are actually learned rather than left to chance.' },
    ],
    citation: { chapter: 'Ch 19', page: 'pp. 291, 297–298' },
    support: 'supported', discrepancy: null,
  },

  /* ═══════════════ SECTION 3 — APPLICATION ═══════════════ */
  {
    id: 'vc-a1',
    topicId: 'vocabulary',
    section: 'application',
    operator: 'design',
    prompt: 'Contextual Application: K-12 Public Schools in Saudi Arabia. Many Saudi 7th-grade students have a limited vocabulary and rely on rote memorization of word lists provided in textbooks. Drawing on Nation\'s "Fluency Development" strand, propose a lesson intervention that uses "high-frequency" words to improve oral production speed.',
    spine: { shape: 'flow', layout: 'stack', start: 'problem', end: 'outcome',
      lead: 'Nation: fluency development',
      nodes: [
        'Rote textbook lists build receptive knowledge but no speaking speed, so students cannot retrieve words fast enough to talk.',
        'Restrict the lesson to a familiar topic and only high-frequency words the students already know.',
        'Run repeated timed retelling, the four-three-two technique: the same short talk to three partners in shrinking time.',
        'Keep it meaning-focused and low-stress: listeners react to content and the teacher does not correct errors mid-task.',
        'Students produce known words noticeably faster, assessed by how much they say in the time, not by new words.',
      ] },
    core: [
      { type: 'prose', html: '<strong>Problem + evidence.</strong> Memorising textbook word lists builds some <em>receptive</em> knowledge but no <strong>speed</strong>: students cannot retrieve the words fast enough to speak. Nation’s <strong>fluency-development</strong> strand targets exactly this — getting faster at using words <em>already known</em>, adding no new vocabulary.' },
      { type: 'steps', items: [
        { step: '<strong>Restrict to known, high-frequency words.</strong> Pick a familiar topic (e.g. “my school day”) and only words at the GSL / high-frequency level the 7th-graders already know.', why: 'Fluency can only be built on the already-known.' },
        { step: '<strong>Repeated timed retelling (the “4/3/2” fluency technique).</strong> A student gives the <em>same</em> short talk to three different partners under shrinking time — four minutes, then three, then two.', why: 'Repetition and time pressure force quicker, more automatic retrieval.' },
        { step: '<strong>Keep it meaning-focused and low-stress.</strong> Listeners react to the content (ask one real question); the teacher does <em>not</em> correct errors during the task.', why: 'Speed, not accuracy, is the goal of this strand.' },
      ] },
      { type: 'prose', html: '<strong>Outcome / assessment.</strong> Students produce known words noticeably faster and with less hesitation. Assess by <em>how much</em> they say in the time (rate / amount), not by new words — fluency, not breadth, is what this lesson grows.' },
    ],
    citation: { chapter: 'Ch 19', page: 'pp. 292, 295' },
    support: 'supported', discrepancy: null,
  },
  {
    id: 'vc-a2',
    topicId: 'vocabulary',
    section: 'application',
    operator: 'apply',
    prompt: 'Cultural & Linguistic Analysis: Transitioning to Saudi University IEPs. Saudi university students entering Intensive English Programs (IEPs) often struggle with the "academic vocabulary" required for science and business. How can "Language-focused Learning" (word parts) be leveraged to help these Arabic L1 learners decode complex English academic terms?',
    spine: { shape: 'flow', layout: 'stack', start: 'problem', end: 'outcome',
      lead: 'Nation: language-focused learning',
      nodes: [
        'Academic science and business terms are too many and too complex to memorise as whole words.',
        'Teach high-value academic prefixes, roots, and suffixes drawn from the Academic Word List of about 570 families.',
        'Decompose words and build families with a four-column part-of-speech chart, marking gaps with an X.',
        'Apply the strategy to authentic academic text, inferring meaning from parts then confirming in a dictionary.',
        'Arabic L1 learners gain an edge because root-and-pattern morphology makes root analysis familiar; assess by decoding unseen AWL words.',
      ] },
    core: [
      { type: 'prose', html: '<strong>Problem + evidence.</strong> Academic terms in science and business are too numerous and too complex to memorise as whole words. Nation’s <strong>language-focused</strong> strand — deliberate study of <strong>word parts</strong> — lets learners <em>decode</em> them instead, by breaking a long word into known prefixes, roots, and suffixes.' },
      { type: 'steps', items: [
        { step: '<strong>Teach high-value word parts.</strong> Explicitly teach the common academic prefixes, roots, and suffixes (e.g. <em>trans-</em>, <em>-duct-</em>, <em>-tion</em>, <em>-ity</em>) drawn from the <strong>Academic Word List</strong> (≈570 families across business, humanities, law, and science).', why: 'A few parts unlock a large number of academic words.' },
        { step: '<strong>Decompose and build word families.</strong> Use a four-column part-of-speech chart to take an AWL base and generate its family — <em>analyse, analysis, analytical, analytically</em> — marking gaps with an X.', why: 'This shows how one root yields a whole family across word classes.' },
        { step: '<strong>Apply to authentic academic text.</strong> Have students break complex terms in a real science or business passage into their parts to infer meaning, then confirm in a learner’s dictionary.', why: 'This transfers the strategy to the texts the IEP actually requires.' },
      ] },
      { type: 'prose', html: '<strong>Outcome / assessment.</strong> Arabic L1 learners have an advantage to leverage — Arabic builds words from <em>roots and patterns</em>, so root-based analysis is conceptually familiar; what they need is the English Greco-Latin inventory taught explicitly. Assess by having them decode <em>unseen</em> AWL words into parts.' },
    ],
    citation: { chapter: 'Ch 19', page: 'pp. 290, 293, 295' },
    support: 'supported', discrepancy: null,
  },

]);
