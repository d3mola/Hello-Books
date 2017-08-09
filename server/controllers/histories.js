const History = require('../models').History;
const Book = require('../models').Book;
//const User = require('../models').User;

module.exports = {
  borrow(req, res) {
    return Book
      .find({
        where: {
          id: req.body.userId,
        },
      })
      .then(book => {
        if (!book) {
          return res.status(404).send({
            error: 'Book Not Found',
          });
        }
        else if(Book.quantity < 1) {
          return res.status(404).send({
            message: 'Book Unavailable',
          });
        }
        return History
          .create({
            returnStatus: req.body.returnStatus,
            bookId: req.body.bookId,
            userId: req.params.userId,
          })
          .then(borrowed => res.status(200).send(borrowed))
          .catch(error => res.status(400).send(error.toString()));
      })
  },
};