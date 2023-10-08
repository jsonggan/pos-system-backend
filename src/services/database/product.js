exports.up = function (knex) {
  return knex.schema.createTable('products', function (table) {
    table.increments('id').primary();
    table.string('product_name').notNullable();
    table.decimal('unit_price', 10, 2).notNullable();
    table.boolean('is_available').defaultTo(true);
    table.decimal('discount_percentage', 5, 2).defaultTo(0);
    table.integer('tenant_id').unsigned().notNullable();

    table.foreign('tenant_id').references('id').inTable('tenants');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('products');
};
