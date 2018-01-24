
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {id: 1, cohort_id: 1, name:'Joe'},
        {id: 2, cohort_id: 1, name:'Steve'},
        {id: 3, cohort_id: 2, name:'Mike'},
      ]);
    })
    .then(() => {
      return knex.raw(`SELECT setval('students_id_seq', (SELECT MAX(id) FROM students));`)
    })
};
