/* ───────────────────────────────────────────────────────────────
   store.js — global data registry for the LNG 7266 exam app.

   Loaded BEFORE any data/*.js file. Each data file calls
   EXAM.addTopic({...}) and EXAM.addQuestions([...]).

   No build step, no fetch(): all content ships as ordered <script>
   includes, so the app works identically by double-clicking
   index.html (file://) and on GitHub Pages.
   ─────────────────────────────────────────────────────────────── */
window.EXAM = (function () {
  const topics = [];
  const questions = [];

  return {
    topics,
    questions,

    addTopic(t) { topics.push(t); },
    addQuestions(arr) { (arr || []).forEach(q => questions.push(q)); },

    topic(id) { return topics.find(t => t.id === id); },
    byTopic(id) { return questions.filter(q => q.topicId === id); },
    bySection(topicId, section) {
      return questions.filter(q => q.topicId === topicId && q.section === section);
    },
    isPopulated(id) { return questions.some(q => q.topicId === id); },
  };
})();
