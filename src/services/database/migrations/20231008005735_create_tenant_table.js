/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('tenant', function (table) {
    table.uuid('tenant_id').primary();
    table.string('designation');
    table.string('first_name').notNullable();
    table.string('last_name');
    table.string('email_address').notNullable().unique();
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('tenant');
};
