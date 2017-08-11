import db from '../models';

const Book = db.Book;
const History = db.History;

export default {
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

  // controller to return a  book
  update(req, res) {
    return Book
      .find({
        where: {
          id: req.body.bookId,
        },
      })
      .then(book => {
        if (!book) {
          return res.status(404).send({
            error: 'You don\'t have this book',
          });
        }
        return History
          .update({
            returnStatus: req.body.returnStatus,
            bookId: req.body.bookId,
            userId: req.params.userId,
          })
          .then(returned => res.status(200).send(returned))
          .catch(error => res.status(404).send(error));
      })
  }
};