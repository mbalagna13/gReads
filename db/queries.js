const knex = require('./knex');

module.exports= {
  getAllBooks() {
    return knex('books');
  },
  createBooks(books) {
    return knex('books').insert(books).returning('*')
  },
  getBookById(id) {
    return knex('books').where('id', id)
  },
  updateBook(id, book){
    return knex('books').where('id', id).update(book, '*')
  }
}
