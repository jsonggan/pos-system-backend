/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('company', function (table) {
    table.increments('company_id').primary();
    table.string('company_name').notNullable().unique();
    table.string('country').notNullable();
    table.uuid('tenant_id').notNullable();

    table.foreign('tenant_id').references('tenant_id').inTable('tenant');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('company');
};
