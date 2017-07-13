const books = require('../book')

exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE books RESTART IDENTITY CASCADE;')
  .then(function () {
    return knex('books').del()
      .then(function () {
        // Inserts seed entries
        return knex('books').insert(books)
      });
  })
  // Deletes ALL existing entries

};
