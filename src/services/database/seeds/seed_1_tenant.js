/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('tenant').del()
  await knex('tenant').insert([
    {tenant_id: 'ca0843cf-3c72-4bef-96f7-55aa35c491f6', designation: 'Mr', first_name: "Chin Song", last_name: "Gan", email_address: "testing@gmail.com"}
  ]);
};
