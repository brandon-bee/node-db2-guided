
exports.up = function(knex) {
  return knex.schema.createTable('fruits', tbl => {
    tbl.increments()
    tbl.text('fruit_name', 256).unique().notNullable()
    tbl.float('avg_weight').notNullable()
    tbl.boolean('delicious').defaultTo(true)
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('fruits');
};
