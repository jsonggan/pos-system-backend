/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
  .createTable('product_category', function (table) {
    table.integer('product_id').unsigned().notNullable();
    table.integer('category_id').unsigned().notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    
    // Define primary key composed of two foreign keys
    table.primary(['product_id', 'category_id']);
    
    // Define foreign keys to reference the product and category tables
    table
      .foreign('product_id')
      .references('product_id')
      .inTable('product'); // Replace 'product' with the actual product table name
    
    table
      .foreign('category_id')
      .references('category_id')
      .inTable('category'); // Reference the 'category' table
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('product_category');
};
