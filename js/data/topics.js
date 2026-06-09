/* ───────────────────────────────────────────────────────────────
   topics.js — the 8 exam topics, in the order the professor's guide
   lists them. The chapter + author here are VERIFIED against the
   OCR'd source PDFs (2026-06-08), which corrects two misattributions
   in the professor's own guide. Where the guide differs, `attribution`
   records what the guide says and `flag` explains the discrepancy.

   `populated` is informational only; the store derives the real
   answer from whether any questions are registered for the topic.
   ─────────────────────────────────────────────────────────────── */
EXAM.addTopic({
  id: 'grammar',
  name: 'Grammar',
  chapter: 'Ch 17 — Teaching Grammar',
  author: 'Diane Larsen-Freeman',
  attribution: null,
  flag: "The guide gives no chapter number. Verified: grammar is Ch 17 (Larsen-Freeman), not Ch 18 (which is Spoken Grammar, McCarthy & O'Keeffe).",
  order: 1,
});

EXAM.addTopic({
  id: 'vocabulary',
  name: 'Vocabulary',
  chapter: 'Ch 19 — Teaching and Learning Vocabulary',
  author: 'Cheryl Boyd Zimmerman',
  attribution: 'Guide says: "Chapter 19: Teaching Vocabulary by Paul Nation."',
  flag: "Misattributed in the guide. Ch 19 is by Zimmerman. Nation's \"Four Strands\" is cited INSIDE Zimmerman's chapter — it is Nation's framework, not Nation's chapter.",
  order: 2,
});

EXAM.addTopic({
  id: 'writing',
  name: 'Writing',
  chapter: 'Ch 15 — Considerations for Teaching Second Language Writing',
  author: 'Sara Cushing Weigle',
  attribution: null,
  flag: null,
  order: 3,
});

EXAM.addTopic({
  id: 'writing-mechanics',
  name: 'Writing Mechanics',
  chapter: 'Ch 14 — Practical Tasks for Mastering the Mechanics of Writing (and Going Just Beyond)',
  author: 'Elite Olshtain',
  attribution: 'Guide says: "Chapter 14: Functional Tasks for Mastering the Mechanics of Writing and Going Just Beyond" (no author given).',
  flag: 'Title + author corrected against the source. The chapter is "Practical Tasks…" (the guide says "Functional Tasks") and is by Elite Olshtain, whom the guide does not name.',
  order: 4,
});

EXAM.addTopic({
  id: 'reading',
  name: 'Reading / Literacy',
  chapter: 'Ch 11 — School-Age Literacy  +  Ch 12 — Developing Engaged L2 Readers',
  author: 'Anne M. Ediger (Ch 11) & Neil J. Anderson (Ch 12)',
  attribution: 'Guide says: "Chapter 11 ... by Lee Gunderson."',
  flag: 'Ch 11 misattributed in the guide. Verified author of the School-Age Literacy chapter is Anne M. Ediger, not Lee Gunderson. Ch 12 (Anderson) is correct.',
  order: 5,
});

EXAM.addTopic({
  id: 'speaking',
  name: 'L2 Speaking',
  chapter: 'Ch 8 — Second Language Speaking',
  author: 'Anne Lazaraton',
  attribution: null,
  flag: null,
  order: 6,
});

EXAM.addTopic({
  id: 'listening-academic',
  name: 'Listening — Academic',
  chapter: 'Ch 7 — Dimensions of Academic Listening',
  author: 'John Flowerdew & Lindsay Miller',
  attribution: null,
  flag: null,
  order: 7,
});

EXAM.addTopic({
  id: 'listening-process',
  name: 'Listening — Process',
  chapter: 'Ch 6 — Second Language Listening Comprehension: Process and Pedagogy',
  author: 'Christine C. M. Goh',
  attribution: null,
  flag: null,
  order: 8,
});
