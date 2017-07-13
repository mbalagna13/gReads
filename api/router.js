const express = require('express');

const router = express.Router();

const queries = require('../db/queries');

router.get('/books', (req, res) => {
  queries.getAllBooks().then(books => {
    res.json(books)
  });
});

router.post('/books/createBooks', (req, res, next) =>{
  queries.createBooks(req.body).then(result => {
    console.log(req.body);
    res.json(result)
  })
})

router.get('/books/:id', (req, res, next) => {
  queries.getBookById(req.params.id).then(books => {
    console.log(req.body);
    res.json(books);
  })
})

module.exports = router;
