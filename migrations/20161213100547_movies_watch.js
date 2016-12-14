
exports.up = function(knex, Promise) {
  return knex.schema.createTable('movie', function(table){
    table.increments().primary();
    table.string('title').notNullable();
    table.string('director');
    table.string('genre');
    table.integer('year');
    table.boolean('watched');
    table.string('img');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable(movie);
};
