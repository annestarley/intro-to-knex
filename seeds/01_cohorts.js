
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cohorts').del()
    .then(function () {
      return knex('cohorts').insert([
        {id: 1, name: '18-01-WD-SEA', desc:'g111'},
        {id: 2, name: '18-02-WD-SEA', desc:'g222'}
      ]);
    })
    .then(() => {
      return knex.raw(`SELECT setval('cohorts_id_seq', (SELECT MAX(id) FROM cohorts));`)
    })
};
