/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('table').del()
  await knex('table').insert([
    { table_name: '1', company_id: 1},
    { table_name: '2', company_id: 1},
    { table_name: '3', company_id: 1},
    { table_name: '1', company_id: 2},
    { table_name: '2', company_id: 2},
    { table_name: '3', company_id: 2},
    { table_name: '1', company_id: 3},
    { table_name: '2', company_id: 3},
    { table_name: '3', company_id: 3}
  ]);
};
