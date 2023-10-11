/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('product', function (table) {
    table.increments('product_id').primary();
    table.string('product_name').notNullable();
    table.decimal('unit_price', 10, 3).notNullable();
    table.boolean('is_available').defaultTo(true);
    table.decimal('discount_percentage', 6, 3).defaultTo(0);
    table.uuid('tenant_id').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());

    table.foreign('tenant_id').references('tenant_id').inTable('tenant');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('product');
};
