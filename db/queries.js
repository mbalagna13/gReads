const knex = require('./knex');

module.exports= {
  getAllBooks() {
    return knex('books');
  },
  createBooks(books) {
    return knex('books').insert(books).returning('*')
  }
}
