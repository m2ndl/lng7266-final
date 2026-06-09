/* ───────────────────────────────────────────────────────────────
   listening-process.js — Chapter 6, "Second Language Listening
   Comprehension: Process and Pedagogy" (Celce-Murcia et al., eds.,
   4th ed.). Book pp. 72–89.

   Author names are stripped throughout EXCEPT the two the exam
   prompts themselves name: Anderson (1995) and Vandergrift (2004).
   Word targets: Define ~70–90 | Short Note ~200–220 | Application ~225.
   Two guide anomalies preserved + flagged (blank 3rd Define; the
   "pedagogical model" that belongs to the Academic Listening chapter).
   ─────────────────────────────────────────────────────────────── */
EXAM.addQuestions([

  /* ═══════════════ SECTION 1 — DEFINE ═══════════════ */
  {
    id: 'lp-d1',
    topicId: 'listening-process',
    section: 'define',
    term: 'Active Listener',
    prompt: 'Active Listener:',
    spine: ['Listening ≠ hearing', 'Constructs meaning from incomplete input', 'Recognises gaps → asks for info', 'Builds meaning at every level + context'],
    core: [
      { type: 'def', html: 'An <strong>active listener</strong> constructs reasonable interpretations from <strong>underspecified (incomplete) input</strong>, recognises when more specific information is needed, and asks for it.' },
      { type: 'prose', html: 'The key idea: <em>listening is not just hearing</em>. It is active meaning-construction that can begin before the first sound and continue after the input stops — meaning is <strong>built</strong> at every level of text (sounds, grammar, lexis, discourse) and context (topic, participants, purpose, setting), not extracted from the signal.' },
    ],
    expansion: ['Captures the learner’s real situation: input is incomplete because they cannot recognise every word — yet they themselves contribute to comprehension, and in face-to-face talk can ask for clarification.'],
    citation: { chapter: 'Ch 6', page: 'pp. 72–73' },
    support: 'supported', discrepancy: null,
  },
  {
    id: 'lp-d2',
    topicId: 'listening-process',
    section: 'define',
    term: 'Listening Strategies',
    prompt: 'Listening Strategies:',
    spine: ['Planned + consciously adopted', 'Improve comprehension / cope with difficulty', 'vs skills (automatic, effortless)', 'Metacognitive: plan · monitor · evaluate'],
    core: [
      { type: 'def', html: '<strong>Listening strategies</strong> are <strong>planned, consciously adopted</strong> ways of listening — used to improve comprehension and to cope with difficulties.' },
      { type: 'prose', html: 'They contrast with listening <em>skills</em>, which are automatic and effortless. The strategies that direct attention and coordinate processing are <strong>metacognitive</strong> — planning, monitoring, and evaluation — and can be used before, during, or after listening. With practice, a strategy can become an automatic skill.' },
    ],
    expansion: ['Strategies can also be social — used to manage interaction and elicit the speaker’s cooperation.'],
    citation: { chapter: 'Ch 6', page: 'pp. 73–74' },
    support: 'supported', discrepancy: null,
  },
  {
    id: 'lp-d3',
    topicId: 'listening-process',
    section: 'define',
    term: 'Listening Skills  (3rd term — guide left blank)',
    prompt: '•   (the guide’s third Define bullet is blank)',
    spine: ['GUIDE ANOMALY: 3rd bullet blank', 'Best fit: Listening Skills (pairs w/ Short Note 2)', 'Acquired · automatic · effortless', 'Fallback term: Metacognition'],
    core: [
      { type: 'flag', html: '<strong>Guide anomaly.</strong> The third “Define” bullet for this chapter is <em>blank</em> — preserved here, not invented. The best-supported candidate is <strong>Listening Skills</strong> (it pairs with Short Note 2); the fallback is <strong>Metacognition</strong>. Both are defined so you are covered.' },
      { type: 'def', html: '<strong>Listening skills</strong>: acquired abilities that let a person listen with little deliberate effort — the result of actions practised frequently until they become <strong>automatic</strong> (e.g. decoding for perception and parsing).' },
      { type: 'def', html: '<strong>Metacognition</strong>: the ability to think about your own thinking and learning — to plan, monitor, and evaluate how you process the language. Vital here because listening is a hidden process that cannot improve unless it is made visible.' },
    ],
    citation: { chapter: 'Ch 6', page: 'p. 73; p. 81' },
    support: 'partial',
    discrepancy: 'The guide leaves the 3rd Define term blank; the term identity is inferred. Content is grounded in Ch 6.',
  },

  /* ═══════════════ SECTION 2 — SHORT NOTE ═══════════════ */
  {
    id: 'lp-s1',
    topicId: 'listening-process',
    section: 'short_note',
    operator: 'identify',
    prompt: 'Identify and define the three recurrent and overlapping phases of cognitive processing in L2 listening as proposed by Anderson (1995).',
    spine: ['Anderson (1995)', '1 Perception — sound → known word (decode)', '2 Parsing — words into units via grammar/lexis', '3 Utilization — link to prior knowledge → meaning', 'Recurrent + overlapping, not linear'],
    core: [
      { type: 'prose', html: 'Anderson’s (1995) model describes three <strong>recurrent and overlapping</strong> phases of cognitive processing in listening:' },
      { type: 'steps', items: [
        { step: '<strong>Perception</strong> — matching the sounds heard to known words. Also called decoding or sound-script recognition; it recognises words in the stream of speech.', why: 'Bottom-up entry point.' },
        { step: '<strong>Parsing</strong> — the decoded words are analysed into larger units using grammar and lexical cues.', why: 'Builds phrases and clauses.' },
        { step: '<strong>Utilization</strong> — the parsed input is related to prior knowledge of facts and the listening context to interpret meaning and function.', why: 'Comprehension is achieved here.' },
      ] },
      { type: 'caveat', html: 'Stress <em>overlapping</em>, not a linear pipeline. If meaning isn’t needed at once it passes to long-term memory; in interactive listening it is held in working memory while a response is formed. Bottom-up processing feeds perception and parsing; top-down drives utilization; all are steered by metacognition.' },
      { type: 'example', html: 'Trace the word “femur” through a biology lecture: <em>perception</em> recognises the sound-shape as a word; <em>parsing</em> fixes it as a noun in “the biggest bone is the femur”; <em>utilization</em> links it to prior knowledge of anatomy to grasp the point — only then is it understood.' },
    ],
    expansion: ['Working memory underpins this: a phonological loop holds verbal traces, a central executive directs attention, and an episodic buffer integrates everything into one mental representation.'],
    citation: { chapter: 'Ch 6', page: 'pp. 75–76' },
    support: 'supported', discrepancy: null,
  },
  {
    id: 'lp-s2',
    topicId: 'listening-process',
    section: 'short_note',
    operator: 'explain',
    prompt: 'Explain the distinction between "listening skills" and "listening strategies" as described in the chapter.',
    spine: ['Skills = acquired, automatic, effortless', 'Strategies = planned, conscious, to cope', 'Strategies → skills over time', 'Learners move between the two'],
    core: [
      { type: 'distinction',
        left:  { label: 'Listening SKILLS', html: 'Acquired abilities that let a person listen <strong>with little deliberate effort or conscious planning</strong> — the result of actions practised frequently until they become <strong>automatic</strong> (e.g. decoding for perception and parsing).' },
        right: { label: 'Listening STRATEGIES', html: 'Ways of listening that are <strong>planned and consciously adopted</strong> to improve comprehension and cope with difficulty (e.g. metacognitive planning, monitoring, evaluation; cooperation in interaction).' },
      },
      { type: 'prose', html: 'The core contrast is <strong>automatic vs deliberate</strong>. But the relationship is dynamic, not a hard binary: a strategy can <strong>become an automatic skill</strong> over time, and learners constantly move between the two as the difficulty of the text changes — something even competent listeners do.' },
      { type: 'prose', html: 'Pedagogically this matters: because strategies are conscious, they can be <strong>taught and modelled</strong>; skills are grown through frequent practice. A good course does both.' },
      { type: 'example', html: 'For instance: recognising a familiar word automatically is a <em>skill</em>; deciding to listen only for key words when you are lost is a <em>strategy</em>. The same listener draws on both within a single text.' },
    ],
    citation: { chapter: 'Ch 6', page: 'pp. 73–74' },
    support: 'supported', discrepancy: null,
  },
  {
    id: 'lp-s3',
    topicId: 'listening-process',
    section: 'short_note',
    operator: 'compare',
    prompt: 'Compare and contrast "one-way" and "two-way" listening tasks, providing an example of each.',
    spine: ['One-way = nonparticipatory, monologic', 'No immediate response (lecture, radio)', 'Two-way = participatory, dialogic', 'Alternate roles, respond + clarify', 'Conversations vs encounters'],
    core: [
      { type: 'distinction',
        left:  { label: 'ONE-WAY (nonparticipatory)', html: 'Obtain information from the text with <strong>minimal or no interaction</strong> with the speaker; understand meaning <strong>without an immediate response</strong>. The text is <em>monologic</em> (recorded or read aloud). Outcomes: notes, summaries, diagrams.' },
        right: { label: 'TWO-WAY (participatory)', html: 'Learners <strong>alternate listener and speaker roles</strong>, respond directly, and seek clarification. The text is <em>dialogic</em> — jointly constructed. Two forms: <strong>conversations</strong> (interpersonal) and <strong>encounters</strong> (transactional).' },
      },
      { type: 'example', html: '<strong>One-way</strong> — “Listen and reconstruct”: hear a short report twice, note the key points, then reproduce a text close in meaning to the original.' },
      { type: 'example', html: '<strong>Two-way</strong> — “Describe and draw”: one student describes a picture; the partner draws it, asking for clarification and repetition where needed.' },
      { type: 'prose', html: 'The outcomes can look identical (notes, a summary), but in two-way tasks the <strong>process</strong> of reaching them is collaborative — so learners also need cooperation strategies, which is why the teacher pre-teaches clarification phrases such as “Could you say that again?”' },
    ],
    citation: { chapter: 'Ch 6', page: 'pp. 73, 81–83' },
    support: 'supported', discrepancy: null,
  },

  /* ═══════════════ SECTION 3 — APPLICATION ═══════════════ */
  {
    id: 'lp-a1',
    topicId: 'listening-process',
    section: 'application',
    operator: 'design',
    prompt: 'Contextual Application: K-12 Public Schools in Saudi Arabia. In many Saudi K-12 public schools, students often rely on "routine listening plans" where they listen to a recording multiple times until the "sentences clear" [9]. Drawing on the "metacognitive pedagogical sequence" (Vandergrift, 2004), design a lesson intervention for 10th-grade students that moves away from this "product-oriented" approach toward a "process-oriented" one.',
    spine: ['Problem: replay-till-clear = product', 'Vandergrift (2004): 4 processes, listen ×3', 'Plan/predict → Listen×3 + verify → Evaluate', 'Outcome: control of process, not just answers'],
    core: [
      { type: 'prose', html: '<strong>Problem + evidence.</strong> Replaying a recording until “the sentences clear” is <strong>product-oriented</strong>: only the answers matter, so the hidden <em>process</em> of listening is never taught and the learner plateaus.' },
      { type: 'theory', html: '<strong>Framework.</strong> Vandergrift’s (2004) <strong>metacognitive pedagogical sequence</strong> builds four metacognitive processes — planning, monitoring, problem-solving, evaluation — into the lesson. Learners listen <strong>three times</strong>, verifying each pass, which scaffolds the process and hands control to the learner.' },
      { type: 'steps', items: [
        { step: '<strong>Plan &amp; predict.</strong> 10th-graders set a goal for a short clip, share prior knowledge, predict words (some Arabic allowed), and anticipate difficulties.', why: 'A purpose + top-down activation, vs blind replay.' },
        { step: '<strong>Listen ×3 with verification.</strong> 1st → compare understanding and strategies with a partner; 2nd → selective attention to problem spots while the teacher models a think-aloud; 3rd → try chosen strategies, then check against a transcript.', why: 'Makes the hidden process visible; directed re-listening.' },
        { step: '<strong>Evaluate &amp; set goals.</strong> A short listening-diary entry: what worked, what to try next time.', why: 'Self-regulation; long-term development.' },
      ] },
      { type: 'prose', html: '<strong>Outcome / assessment.</strong> Shifts learners from product (correct answers) to <strong>process</strong> (control over how they comprehend). Assess with the diary and a comparable task, not a right/wrong score.' },
    ],
    expansion: ['The five organised stages: Planning/predicting → First listen + verification → Second listen + verification → Third listen + verification → Evaluation and goal-setting.'],
    citation: { chapter: 'Ch 6', page: 'pp. 72, 84–85' },
    support: 'supported', discrepancy: null,
  },
  {
    id: 'lp-a2',
    topicId: 'listening-process',
    section: 'application',
    operator: 'apply',
    prompt: 'Cultural & Linguistic Analysis: Transitioning to EMI at Saudi Universities. Saudi students entering English-medium "foundation" or "intensive English programs" (IEPs) often face "negative expectations" regarding their "linguistic ability" in academic lectures [11]. Based on the "pedagogical model for second language listening," how can instructors use "intertextual" and "social" dimensions to support these learners?',
    spine: ['Problem: EMI lectures → negative expectations', 'Social: two-way + cooperation (clarify together)', 'Intertextual: link lecture to known texts → schema', 'Metacognitive scaffolding (diaries)', 'Outcome: confidence + participation'],
    core: [
      { type: 'flag', html: '<strong>Source note.</strong> The named “pedagogical model” and the eight dimensions belong to the <strong>Academic Listening chapter (Ch 7)</strong>, which this chapter references; here we ground the <em>social</em> and <em>intertextual</em> ideas in the process model and cross-link to Ch 7 for the full framework.' },
      { type: 'prose', html: '<strong>Problem + evidence.</strong> Students entering EMI lectures carry <em>negative expectations</em> about their ability — an affective load on top of a fast academic monologue.' },
      { type: 'steps', items: [
        { step: '<strong>Social dimension.</strong> Build two-way participatory moments into lecture work — peer process discussions and taught cooperation phrases (“Could you say that again?”) so students clarify meaning <em>together</em>.', why: 'Social processes ease the pressure of forming responses; lowers the affective barrier.' },
        { step: '<strong>Intertextual dimension.</strong> Tie each lecture to texts students already meet — pre-reading, slides, the previous lecture — so they bring schema to the listening.', why: 'Background knowledge fuels top-down processing when the monologue outruns decoding.' },
        { step: '<strong>Metacognitive scaffolding.</strong> Model planning, monitoring and evaluation around real lectures; use listening diaries to track progress.', why: 'Makes the hidden lecture-listening process visible and self-regulated.' },
      ] },
      { type: 'prose', html: '<strong>Outcome / assessment.</strong> Greater confidence and participation in EMI lectures. Assess via a reflective diary plus a scaffolded note-taking task on an authentic lecture.' },
    ],
    citation: { chapter: 'Ch 6', page: 'pp. 76–77, 80–84' },
    support: 'partial',
    discrepancy: 'The "pedagogical model" + named dimensions are the Academic Listening chapter’s (Ch 7); grounded here in Ch 6 and cross-linked.',
  },

]);
