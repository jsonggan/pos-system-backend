/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('white_listed_email').del()
  await knex('white_listed_email').insert([
    {id: 1, email: 'testing@gmail.com'},
    {id: 2, email: 'testing1@gmail.com'},
    {id: 3, email: 'testing2@gmail.com'},
    {id: 4, email: 'testing3@gmail.com'},
    {id: 5, email: 'testing4@gmail.com'},
    {id: 6, email: 'testing5@gmail.com'},
    {id: 7, email: 'testing6@gmail.com'},
    {id: 8, email: 'testing7@gmail.com'},
    {id: 9, email: 'testing8@gmail.com'}
  ]);
};
