/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('product_order_property', function (table) {
    table.integer('product_id').unsigned().notNullable();
    table.integer('order_id').unsigned().notNullable();
    table.integer('property_id').unsigned().notNullable();
    table.primary(['product_id', 'order_id', 'property_id']);
    table.boolean('is_selected');
    table.timestamp('created_at').defaultTo(knex.fn.now());

    // Define foreign keys to reference the product, order, and property tables
    table
      .foreign('product_id')
      .references('product_id')
      .inTable('product'); // Replace 'product' with the actual product table name

    table
      .foreign('order_id')
      .references('order_id')
      .inTable('order'); // Reference the 'order' table

    table
      .foreign('property_id')
      .references('property_id')
      .inTable('property'); // Reference the 'property' table
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('product_order_property');
};
