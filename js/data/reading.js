/* ───────────────────────────────────────────────────────────────
   reading.js — Reading / Literacy. Two chapters:
   Ch 11 "Teaching Second/Foreign Language Literacy to School-Age
   Learners" (Anne M. Ediger, pp. 154–169) and Ch 12 "Developing
   Engaged Second Language Readers" (Neil J. Anderson, pp. 170–185),
   Celce-Murcia et al., eds., 4th ed.

   (Source note for the author: the guide misattributes Ch 11 to "Lee
   Gunderson"; verified author is Ediger. Not shown to the student.)
   No author named in the exam prompts → names stripped, footer = chapter · page.
   STYLE: complete sentences (prose + "why" tags); spine = terse cues.
   Word targets: Define ~70–90 | Short Note ~180–200 | Application ~190–210.
   ─────────────────────────────────────────────────────────────── */
EXAM.addQuestions([

  /* ═══════════════ SECTION 1 — DEFINE ═══════════════ */
  {
    id: 'rd-d1',
    topicId: 'reading',
    section: 'define',
    term: 'Literacy',
    prompt: 'Literacy:',
    spine: { shape: 'map', center: 'Literacy', payoff: 'It is broader than reading and writing alone.',
      spokes: [
        { label: 'Skills involved', text: 'the oral, written, and visual skills used to handle text' },
        { label: 'Medium', text: 'works with text in print or on a screen' },
        { label: 'Purpose', text: 'creating and interpreting meaning for various purposes' },
        { label: 'Wider reach', text: 'also includes the oral language that supports reading and writing, plus critical reading' },
        { label: 'The new literacy', text: 'finding, evaluating, using, and communicating information across text, visual, audio, and video media' },
      ] },
    core: [
      { type: 'def', html: '<strong>Literacy</strong> is the necessary <strong>oral, written, and visual skills</strong> involved in using text, whether in print or on a screen, to <strong>create and interpret meaning</strong> for various purposes.' },
      { type: 'prose', html: 'It is broader than reading and writing alone. It also includes the oral language that supports them, critical thinking and critical reading, and, increasingly, the “new literacy” of finding, evaluating, using, and communicating information across text, visual, audio, and video media.' },
    ],
    citation: { chapter: 'Ch 11', page: 'p. 155' },
    support: 'supported', discrepancy: null,
  },
  {
    id: 'rd-d2',
    topicId: 'reading',
    section: 'define',
    term: 'BICS (Basic Interpersonal Communicative Skills)',
    prompt: 'BICS (Basic Interpersonal Communicative Skills):',
    spine: { shape: 'map', center: 'BICS: everyday oral language for social communication', payoff: 'It develops earlier and more easily than academic language.',
      spokes: [
        { label: 'Cognitive load', text: 'context-embedded and cognitively less demanding' },
        { label: 'Shared context', text: 'speakers share background knowledge and the physical setting' },
        { label: 'Extra cues', text: 'they read each other’s faces and tone of voice and use gestures' },
        { label: 'Feedback', text: 'immediate feedback is available as they talk' },
        { label: 'Why it is easier', text: 'less of the meaning has to be carried by the words themselves' },
      ] },
    core: [
      { type: 'def', html: '<strong>BICS (Basic Interpersonal Communicative Skills)</strong> is the informal, everyday <strong>oral language</strong> used for social communication.' },
      { type: 'prose', html: 'It is context-embedded and cognitively less demanding. Speakers share background knowledge and the physical setting, read each other’s faces and tone of voice, use gestures, and get immediate feedback, so less of the meaning has to be carried by the words themselves. It develops earlier and more easily than academic language.' },
    ],
    citation: { chapter: 'Ch 11', page: 'p. 156' },
    support: 'supported', discrepancy: null,
  },
  {
    id: 'rd-d3',
    topicId: 'reading',
    section: 'define',
    term: 'CALP (Cognitive Academic Language Proficiency)',
    prompt: 'CALP (Cognitive Academic Language Proficiency):',
    spine: { shape: 'map', center: 'CALP: the academic language needed for school', payoff: 'It is the language learners most need to develop in order to succeed at school.',
      spokes: [
        { label: 'What it is for', text: 'discussing and critically analysing complex ideas, and especially reading and writing' },
        { label: 'Cognitive load', text: 'more cognitively demanding than everyday talk' },
        { label: 'Context', text: 'context-reduced, with no shared setting or immediate feedback' },
        { label: 'How meaning is carried', text: 'complex meanings must be made explicit by language itself rather than by context' },
      ] },
    core: [
      { type: 'def', html: '<strong>CALP (Cognitive Academic Language Proficiency)</strong> is the <strong>academic language</strong> needed for school — for discussing and critically analysing complex ideas and, especially, for reading and writing.' },
      { type: 'prose', html: 'It is more <strong>cognitively demanding</strong> and <strong>context-reduced</strong> than everyday talk: without shared context or immediate feedback, the reader and writer must make complex meanings explicit “by means of language itself rather than by means of contextual support.” It is the language learners most need to develop in order to succeed at school.' },
    ],
    citation: { chapter: 'Ch 11', page: 'p. 156' },
    support: 'supported', discrepancy: null,
  },
  {
    id: 'rd-d4',
    topicId: 'reading',
    section: 'define',
    term: 'Interdependence Hypothesis',
    prompt: 'Interdependence Hypothesis:',
    spine: { shape: 'flow',
      nodes: [
        'Literacy and academic-language skills learned in the L1 transfer to the L2',
        'because both draw on a common underlying proficiency',
        'and learning to read and write in the L2 means developing that same academic language',
        'so first-language literacy is an asset, not a distraction',
      ],
      note: 'Time spent on literacy in the native language is not time lost for English reading.' },
    core: [
      { type: 'def', html: 'The <strong>interdependence hypothesis</strong> holds that the literacy and academic-language skills learned in the first language <strong>transfer to the second</strong>, because they draw on a <strong>“common underlying proficiency.”</strong>' },
      { type: 'prose', html: 'Learning to read and write in the L2 means developing academic language, and the skills and knowledge built in the L1 are available to support that development. So first-language literacy is an asset rather than a distraction: time spent on literacy in the native language is not time lost with respect to English reading.' },
    ],
    citation: { chapter: 'Ch 11', page: 'p. 156' },
    support: 'supported', discrepancy: null,
  },
  {
    id: 'rd-d5',
    topicId: 'reading',
    section: 'define',
    term: 'Schema Theory',
    prompt: 'Schema Theory:',
    spine: { shape: 'map', center: 'Schema theory: comprehension as integrating new text with prior knowledge', payoff: 'Without sufficient world knowledge, fluent comprehension cannot occur.',
      spokes: [
        { label: 'Schemata', text: 'existing structures of background knowledge about people, places, events, and activities' },
        { label: 'Which side of reading', text: 'it underlies the top-down side, used to predict and infer' },
        { label: 'Where meaning lives', text: 'meaning emerges from text and reader together, not from the words alone' },
      ] },
    core: [
      { type: 'def', html: '<strong>Schema theory</strong> explains comprehension as the reader’s <strong>integration of new text with existing structures of background (“world”) knowledge</strong> — the schemata of people, places, events, and activities the reader already holds.' },
      { type: 'prose', html: 'It underlies the <strong>top-down</strong> side of reading: readers use what they already know to predict, infer, and build meaning, so that meaning does not reside in the words alone but emerges from the combination of the text and the reader’s knowledge. Without sufficient world knowledge, fluent comprehension cannot occur.' },
    ],
    citation: { chapter: 'Ch 12', page: 'p. 176' },
    support: 'supported', discrepancy: null,
  },
  {
    id: 'rd-d6',
    topicId: 'reading',
    section: 'define',
    term: 'Interactive Model of Reading',
    prompt: 'Interactive Model of Reading:',
    spine: { shape: 'map', center: 'Interactive model: equal weight to top-down and bottom-up processing', payoff: 'weakness at either end slows fluent reading',
      spokes: [
        { label: 'The text', text: 'one of the three interacting components' },
        { label: 'Processing strategies', children: ['cognitive: top-down predicting and inferring', 'language: bottom-up letter, sound, and word recognition'] },
        { label: 'Knowledge base', children: ['world knowledge: top-down', 'language knowledge: bottom-up'] },
      ] },
    core: [
      { type: 'def', html: 'The <strong>interactive model of reading</strong> gives <strong>equal importance to top-down and bottom-up processing</strong>, treating reading as the interaction of three components: the text, the reader’s processing strategies, and the reader’s knowledge base.' },
      { type: 'prose', html: 'The processing strategies split into <strong>cognitive</strong> (top-down: predicting, inferring, problem-solving) and <strong>language</strong> (bottom-up: recognising letters, sounds, and words); the knowledge base splits into <strong>world knowledge</strong> (top-down) and <strong>language knowledge</strong> (bottom-up). Both the top and the bottom are essential, and weakness at either end slows fluent reading.' },
    ],
    citation: { chapter: 'Ch 12', page: 'p. 176' },
    support: 'supported', discrepancy: null,
  },
  {
    id: 'rd-d7',
    topicId: 'reading',
    section: 'define',
    term: 'Reading Engagement',
    prompt: 'Reading Engagement:',
    spine: { shape: 'map', center: 'Engaged reader', payoff: 'the five overlap and reinforce each other',
      spokes: [
        { label: 'Reads widely', text: 'reads a lot, for different purposes' },
        { label: 'Reads fluently', text: 'reads smoothly enough to free attention for meaning' },
        { label: 'Comprehends actively', text: 'understands by doing something with what is read' },
        { label: 'Metacognitively aware', text: 'monitors reading using a variety of strategies' },
        { label: 'Motivated', text: 'is motivated, which sustains the effort' },
      ] },
    core: [
      { type: 'def', html: 'An <strong>engaged reader</strong> is defined by <strong>five characteristics</strong>: reading widely for different purposes, reading fluently, comprehending by doing something with what is read, being metacognitively aware in using a variety of strategies, and being motivated.' },
      { type: 'prose', html: 'These five overlap and reinforce one another: purpose directs strategy choice, fluency frees attention for meaning, and motivation sustains the effort. Engagement is therefore the <strong>synergy of all five</strong> rather than any one in isolation.' },
    ],
    citation: { chapter: 'Ch 12', page: 'p. 171' },
    support: 'supported', discrepancy: null,
  },
  {
    id: 'rd-d8',
    topicId: 'reading',
    section: 'define',
    term: 'Metacognition',
    prompt: 'Metacognition:',
    spine: { shape: 'flow', lead: 'Metacognition: conscious awareness of and control over one’s own reading, stepping back to reflect on one’s thinking',
      nodes: [
        'Prepare and plan the reading',
        'decide when to use a particular strategy',
        'monitor how that strategy is working',
        'combine strategies as needed',
        'evaluate how effective they were',
      ],
      note: 'Without it, learners read “without direction”; with it, they become self-directed, independent readers.' },
    core: [
      { type: 'def', html: '<strong>Metacognition</strong> is the reader’s <strong>conscious awareness of, and control over, their own reading and learning</strong> — the ability to step back and reflect on one’s own thinking.' },
      { type: 'prose', html: 'Applied to reading strategies, it involves preparing and planning, deciding when to use a strategy, monitoring its use, combining strategies, and evaluating their effectiveness. Without it, learners read “without direction,” unable to plan, monitor, or review their progress.' },
    ],
    citation: { chapter: 'Ch 12', page: 'pp. 173, 178' },
    support: 'supported', discrepancy: null,
  },

  /* ═══════════════ SECTION 2 — SHORT NOTE ═══════════════ */
  {
    id: 'rd-s1',
    topicId: 'reading',
    section: 'short_note',
    operator: 'identify',
    prompt: 'Identify and define the three broad stages of L2 literacy development for school-age learners.',
    spine: { shape: 'flow', layout: 'stack',
      nodes: [
        'Beginning (learning to read): mastering decoding and print conventions on simple narrative texts',
        'Developing (the transition): consolidating fluency and comprehension, where many stall in the intermediate slump',
        'Reading to learn: gaining new knowledge from expository and academic texts as an independent reader',
      ],
      note: 'The key shift is from “learning to read” to “reading to learn,” and the goal is the independent reader.' },
    core: [
      { type: 'prose', html: 'For school-age learners, L2 literacy develops broadly through three stages, moving from cracking the code to using reading to gain knowledge. The stages overlap rather than switch cleanly, but each marks a distinct shift in what the reader can do.' },
      { type: 'steps', items: [
        { step: '<strong>Beginning (learning to read).</strong> Learners master the conventions of print — letter-sound correspondences, decoding, and word recognition — usually on simple, short narrative texts.', why: 'At this stage they are learning what the shapes and lines on the page mean.' },
        { step: '<strong>Developing (the transition).</strong> Learners consolidate fluency and comprehension and begin adding expository texts; this is where many stall in the “intermediate-level slump.”', why: 'The amount to learn expands sharply, and decoding alone no longer carries them.' },
        { step: '<strong>Reading to learn.</strong> Learners use reading to gain new knowledge from information-based, expository, and academic texts, becoming independent readers.', why: 'This is where reading finally becomes a tool for learning, not just a skill being learned.' },
      ] },
      { type: 'prose', html: 'The key shift across the three is from <strong>learning to read</strong> to <strong>reading to learn</strong>, and the teacher’s task is to move learners over that line.' },
    ],
    citation: { chapter: 'Ch 11 + 12', page: 'pp. 155, 171' },
    support: 'supported', discrepancy: null,
  },
  {
    id: 'rd-s2',
    topicId: 'reading',
    section: 'short_note',
    operator: 'explain',
    prompt: 'Explain the role of "motivation" in fostering an engaged second language reader.',
    spine: { shape: 'flow', layout: 'stack', lead: 'Motivation is one of the five characteristics of an engaged reader, and the one that sustains the rest',
      nodes: [
        'Without it even able learners will not persist',
        'Motivation works out as the expected reward over the effort required',
        'so the teacher’s job is to raise the expectation of reward while lowering the effort',
        'lowering effort by matching texts to level and giving a clear reading purpose',
      ],
      note: 'It is a shared responsibility: teacher interventions plus the learner’s own self-regulation.' },
    core: [
      { type: 'prose', html: 'Motivation is one of the five characteristics of an engaged reader and the one that sustains the rest. Without it, even able learners will not persist; with it, learners can reach a working knowledge of the L2 regardless of aptitude.' },
      { type: 'steps', items: [
        { step: '<strong>Motivation is the expected reward over the effort required.</strong> A simple formula frames the teacher’s task: raise the expectation of reward while lowering the effort required.', why: 'Readers invest time and effort in proportion to the payoff they expect.' },
        { step: '<strong>It is a shared responsibility, not the learner’s alone.</strong> Motivational strategies combine the teacher’s interventions to stimulate motivation with the learner’s own self-regulation.', why: 'Motivation is both intrinsic and extrinsic, and during the intermediate slump the teacher may be the decisive factor.' },
        { step: '<strong>Lower the effort by matching texts and purpose.</strong> Level-appropriate texts and a clear reading purpose make reading feel achievable and worthwhile.', why: 'Texts that are too hard, or read with no purpose, drain motivation.' },
      ] },
      { type: 'prose', html: 'So motivation is not a fixed trait but something the teacher actively builds — through enthusiasm, achievable texts, and clear purposes — to keep struggling readers engaged.' },
    ],
    citation: { chapter: 'Ch 12', page: 'pp. 174, 178–179' },
    support: 'supported', discrepancy: null,
  },
  {
    id: 'rd-s3',
    topicId: 'reading',
    section: 'short_note',
    operator: 'compare',
    prompt: 'Compare and contrast "Intensive" and "Extensive" reading in the L2 curriculum.',
    spine: { shape: 'contrast', rel: 'vs',
      a: { label: 'Intensive', text: 'reading small chunks of text to learn a new skill or new vocabulary, covering phoneme-grapheme work, vocabulary, strategy and metacognition, and fluency' },
      b: { label: 'Extensive', text: 'reading larger amounts of level-appropriate text to build fluency, vocabulary, and the reading habit' },
      bridge: 'A balanced curriculum links the two: a strategy practised intensively is then used in extensive reading.' },
    core: [
      { type: 'distinction',
        left:  { label: 'INTENSIVE READING', html: 'Reading <strong>small chunks of text</strong> with the explicit purpose of learning a new reading skill or new vocabulary. It includes work on phoneme-grapheme correspondences (the bottom-up side), vocabulary, strategy and metacognitive instruction, and reading fluency.' },
        right: { label: 'EXTENSIVE READING', html: 'Reading <strong>larger amounts of text</strong>. Learners read widely, at a level that is not too difficult, to build fluency and vocabulary and to develop the habit of reading.' },
      },
      { type: 'steps', items: [
        { step: '<strong>Intensive reading builds the skill explicitly.</strong> The teacher isolates and teaches a specific strategy, sound-symbol pattern, or set of words on a short text.', why: 'A new skill needs focused, deliberate practice.' },
        { step: '<strong>Extensive reading consolidates the skill in volume.</strong> Learners then apply what was taught across large amounts of level-appropriate text.', why: 'Fluency and vocabulary grow through doing a lot of reading.' },
      ] },
      { type: 'prose', html: 'A balanced curriculum <strong>links</strong> the two: a strategy practised intensively is then used during extensive reading. So extensive reading is more than just “reading a lot” — it is guided practice of what the intensive lessons introduced.' },
    ],
    citation: { chapter: 'Ch 12', page: 'pp. 179–180' },
    support: 'supported', discrepancy: null,
  },
  {
    id: 'rd-s4',
    topicId: 'reading',
    section: 'short_note',
    operator: 'justify',
    prompt: 'Justify the inclusion of metacognitive strategy instruction for L2 readers.',
    spine: { shape: 'map', center: 'Include metacognitive strategy instruction: the most effective learners are the metacognitively aware ones', payoff: 'For struggling intermediate readers it lets them name the learning challenge and pick the strategy to solve it.',
      spokes: [
        { label: 'Gives direction and control', text: 'without it learners read “without direction,” unable to plan, monitor, or review' },
        { label: 'Makes comprehension visible', text: 'think-alouds surface hidden strategies, and what is visible can be improved' },
        { label: 'Builds independence', text: 'aware readers become self-directed and take responsibility for their own learning' },
      ] },
    core: [
      { type: 'prose', html: 'Metacognitive strategy instruction is justified because the most effective language learners are precisely those who are <strong>metacognitively aware</strong> — who plan, monitor, and evaluate their own reading.' },
      { type: 'steps', items: [
        { step: '<strong>It gives readers direction and control.</strong> Without metacognitive approaches, learners read “without direction,” unable to plan, monitor progress, or review what they have done.', why: 'Awareness lets the reader choose and adjust strategies to the purpose and the difficulty.' },
        { step: '<strong>It makes the hidden process of comprehension visible.</strong> Frameworks such as think-aloud, refining strategy use, letting it gel, and self-assessment teach readers to reflect on strategies like predicting, questioning, visualising, and summarising.', why: '“Comprehension shouldn’t be silent,” and what is made visible can be improved.' },
        { step: '<strong>It builds independence.</strong> Metacognitively aware readers become self-directed and take responsibility for their own learning.', why: 'Independence is what lets a reader keep learning without the teacher.' },
      ] },
      { type: 'prose', html: 'For struggling intermediate readers especially, this awareness is what lets them identify the learning challenge and select the strategy to solve it, which is why it belongs in the curriculum.' },
    ],
    citation: { chapter: 'Ch 12', page: 'pp. 173, 178, 182–183' },
    support: 'supported', discrepancy: null,
  },
  {
    id: 'rd-s5',
    topicId: 'reading',
    section: 'short_note',
    operator: 'synthesize',
    prompt: 'Synthesize how "Schema Theory" and "Bottom-up Processing" interact in the reading process.',
    spine: { shape: 'flow', lead: 'Reading is interactive: bottom-up and schema (top-down) work at the same time',
      nodes: [
        { rank: ['Bottom-up supplies the code: letters to sounds to words to phrases', 'Schema supplies the knowledge: predicting and inferring from world knowledge'] },
        'Meaning emerges from text and reader together, since knowing every word does not guarantee understanding',
      ],
      note: 'Weakness at either end, in decoding or in world knowledge, stalls comprehension.' },
    core: [
      { type: 'prose', html: 'Reading is <strong>interactive</strong>: it draws on bottom-up processing and on schema (top-down) processing at the same time, and fluent comprehension depends on both working together.' },
      { type: 'steps', items: [
        { step: '<strong>Bottom-up supplies the code.</strong> The reader recognises letters, maps them to sounds, identifies words, and chunks them into phrases, building meaning from the smallest units upward.', why: 'Without rapid, automatic decoding, attention is consumed and comprehension stalls.' },
        { step: '<strong>Schema supplies the knowledge.</strong> The reader brings structures of world and background knowledge to predict, infer, and interpret, so meaning emerges from the combination of text and reader, not from the words alone.', why: 'Knowing 100% of the words does not guarantee understanding 100% of the text.' },
        { step: '<strong>The two meet in the middle.</strong> Strong bottom-up skills free the reader to draw on top-down schema, and both feed a single coherent representation of the text.', why: 'A gap in either decoding or world knowledge stalls comprehension.' },
      ] },
      { type: 'prose', html: 'Reading, then, is neither purely bottom-up nor purely top-down: decoding and schema interact continuously, which is why instruction must build both.' },
    ],
    citation: { chapter: 'Ch 12', page: 'p. 176 (+ Ch 11 p. 158)' },
    support: 'supported', discrepancy: null,
  },

  /* ═══════════════ SECTION 3 — APPLICATION ═══════════════ */
  {
    id: 'rd-a1',
    topicId: 'reading',
    section: 'application',
    operator: 'design',
    prompt: 'Contextual Application: K-12 Literacy in Saudi Public Schools. Many Saudi K-12 students struggle with "reading to learn" in late elementary and middle school because their English instruction has focused almost exclusively on "beginning-level decoding" [7]. Design a "scaffolded" lesson for a 7th-grade science-themed English text that moves them toward the "developing" stage of literacy.',
    spine: { shape: 'flow', layout: 'stack', start: 'problem', end: 'outcome',
      nodes: [
        'Saudi 7th-graders stalled at decoding can read the words but cannot yet read to learn from an expository science text',
        'Pre-teach a small set of key science words deeply and activate what students already know about the topic',
        'Scaffold comprehension with sentence starters while modelling predicting, questioning, visualising, and summarising',
        'Re-read the same passage to separate main ideas from details and complete a graphic organiser, then connect it to writing',
        'Students extract and discuss meaning, assessed by the organiser and a short summary rather than word-perfect reading',
      ] },
    core: [
      { type: 'prose', html: '<strong>Problem + evidence.</strong> Saudi 7th-graders stalled at beginning-level decoding can read the words but cannot yet <strong>read to learn</strong> from an expository science text. A scaffolded lesson moves them toward the developing stage by adding comprehension and academic-language support on top of their decoding.' },
      { type: 'steps', items: [
        { step: '<strong>Pre-teach academic vocabulary and activate schema.</strong> Before reading, teach a small set of key science words deeply and draw out what students already know about the topic.', why: 'Comprehension needs near-complete word coverage and the world knowledge that drives top-down processing.' },
        { step: '<strong>Scaffold comprehension with sentence starters and strategies.</strong> Provide sentence frames (“I think… because…,” “This reminds me of…”) and model predicting, questioning, visualising, and summarising on short chunks of the text.', why: 'Sentence starters supply the academic language ELLs lack, and modelling makes comprehension visible.' },
        { step: '<strong>Return to the text for guided meaning-making, then extend.</strong> Re-read the same passage to separate main ideas from details and complete a graphic organiser, then connect it to a short piece of writing.', why: 'Revisiting a known text for comprehension work is what moves learners from decoding to reading to learn.' },
      ] },
      { type: 'prose', html: '<strong>Outcome / assessment.</strong> Students extract and discuss meaning from an expository science text rather than only decoding it. Assess with the graphic organiser and a short written summary, keeping the focus on comprehension rather than word-perfect reading.' },
    ],
    citation: { chapter: 'Ch 11 + 12', page: 'pp. 161–162, 171, 179' },
    support: 'supported', discrepancy: null,
  },
  {
    id: 'rd-a2',
    topicId: 'reading',
    section: 'application',
    operator: 'apply',
    prompt: 'Cultural & Linguistic Analysis: Arabic L1 to English L2 Orthographic Transfer. Considering that Arabic (the L1 of Saudi learners) is a "semitic language" with a "right-to-left" orientation and a "different script," what specific "bottom-up" and "top-down" challenges might a Saudi "beginning" reader face, and how should a PhD-level curriculum address them?',
    spine: { shape: 'flow', layout: 'stack', start: 'problem', end: 'outcome',
      nodes: [
        'Arabic and English differ in script, direction, and orthographic depth, so challenges hit both ends of the interactive model',
        { rank: ['Bottom-up: a new script, left-to-right direction, and less transparent sound-spelling, requiring new brain activation patterns', 'Top-down: gaps in genre conventions and in the cultural and background knowledge that schemata supply'] },
        'Teach English letter-to-sound conversions and onsets and rimes with ample easy reading for automaticity, build world knowledge, and allow a long timeline',
        'Treat the transition as a lengthy dual-track process and assess decoding automaticity and comprehension separately',
      ] },
    core: [
      { type: 'prose', html: '<strong>Analysis.</strong> Arabic and English differ in script, direction, and orthographic depth, so a Saudi beginning reader faces challenges at <strong>both ends</strong> of the interactive model — in bottom-up decoding and in the top-down knowledge that supports it.' },
      { type: 'steps', items: [
        { step: '<strong>Bottom-up challenges.</strong> The reader must rebuild low-level processing for a new script and the opposite, left-to-right direction, and English sound-spelling is less transparent than Arabic. Brains acquire different activation patterns for different writing systems, so this is slow.', why: 'Decoding habits and letter-sound routes from Arabic do not transfer directly to English.' },
        { step: '<strong>Top-down challenges.</strong> Differences in genre conventions and in cultural and background knowledge can leave gaps in the world knowledge and schemata that drive prediction and inference in English texts.', why: 'Top-down processing depends on knowledge the reader may not share with the English text.' },
        { step: '<strong>What the curriculum should address.</strong> Provide explicit instruction in English letter-to-sound conversions and onsets and rimes, with ample easy reading to build automaticity, while also building world knowledge and academic schemata, and allow a realistically long acquisition period.', why: 'The interactive model requires strengthening both the bottom and the top, and changing L1 strategies takes time.' },
      ] },
      { type: 'prose', html: '<strong>Outcome.</strong> A research-informed curriculum should treat the transition as a lengthy, dual-track process — automatising new bottom-up decoding while building top-down knowledge — rather than rushing beginning readers into difficult texts. Assess decoding automaticity and comprehension separately so progress at each level stays visible.' },
    ],
    citation: { chapter: 'Ch 11 + 12', page: 'pp. 158, 168, 176' },
    support: 'supported', discrepancy: null,
  },

]);
