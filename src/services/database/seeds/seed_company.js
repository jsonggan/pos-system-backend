/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('company').del()
  await knex('company').insert([
    {company_name: 'KFC', country: 'Malaysia', tenant_id: 'ca0843cf-3c72-4bef-96f7-55aa35c491f6'},
    {company_name: 'KFC-Singapore', country: 'Malaysia', tenant_id: 'ca0843cf-3c72-4bef-96f7-55aa35c491f6'},
    {company_name: 'PizzaHut', country: 'KFC-Thailand', tenant_id: 'ca0843cf-3c72-4bef-96f7-55aa35c491f6'}
  ]);
};
