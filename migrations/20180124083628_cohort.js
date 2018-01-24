
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cohorts', function(table){
    table.increments();
    table.string('name').notNullable();
    table.string('desc').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('cohorts')
};
