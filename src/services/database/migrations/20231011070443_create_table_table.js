/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('table', function (table) {
    table.increments('table_id').primary();
    table.string('table_name').notNullable();
    table.integer('company_id').unsigned().notNullable();
    
    table.
      foreign('company_id').
      references('company_id').
      inTable('company');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('table');
};
