/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
  .createTable('category', function (table) {
    table.increments('category_id').primary();
    table.string('category_name').notNullable();
    table.integer('tenant_id').unsigned().notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    
    // Define foreign key to reference the tenant table (assuming you have one)
    table
      .foreign('tenant_id')
      .references('tenant_id')
      .inTable('tenant'); // Replace 'tenant' with the actual tenant table name
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('category')
};
