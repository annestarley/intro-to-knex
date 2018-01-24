
exports.up = function(knex, Promise) {
  return knex.schema.createTable('students', function(table){
    table.increments();
    table.bigInteger('cohort_id').references('cohorts.id').onDelete('CASCADE')
    table.string('name')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('students')
};
