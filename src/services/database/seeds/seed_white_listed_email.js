/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('white_listed_email').del()
  await knex('white_listed_email').insert([
    {id: 1, email: 'testing@gmail.com'}
  ]);
};
