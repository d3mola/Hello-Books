const Book = require('../models').Book;

module.exports = {
  create(req, res) {
    return Book
      .create({
        title: req.body.title,
        author: req.body.author,
        category: req.body.category,
        quantity: req.body.quantity,
        
      })
      .then(book => res.status(201).send(book))
      .catch(error => res.status(400).send(error));
  },// end of route to add book

  list(req, res) {
  return Book
    .findAll()
    .then(books => res.status(201).send(books))
    .catch(error => res.status(400).send(error.toString()));
  },// end of get book route
};