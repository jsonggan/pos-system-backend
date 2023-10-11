/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('order', function (table) {
    table.increments('order_id').primary();
    table.string('table_number').notNullable();
    table.decimal('total_amount_due', 10, 3);
    table.decimal('total_amount_paid', 10, 3);
    table.uuid('tenant_id').notNullable();
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
  return knex.schema.dropTable('order');
};
