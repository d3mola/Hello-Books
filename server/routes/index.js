import usersController from'../controllers/users';
import booksController from '../controllers/books';
import historiesController from '../controllers/histories';


export default (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Hello Books!',
  }));

  app.post('/api/users/signup', usersController.create);
  //app.post('/api/users/signin', usersController.login);// not working yet
  
  // Route to add a book
  app.post('/api/books', booksController.create);

  // Route to update book info
  app.put('/api/books/:bookId', booksController.update);

  // Route to get all books in the library
  app.get('/api/books', booksController.list);

  //An API route that allow users to get all the books 
  //that the user has borrowed but has not returned
  //app.get('/api/users/<userId>/books?returned=false', booksController.login);

  //An API route that allow user to borrow a book
  app.post('/api/users/:userId/books', historiesController.borrow);

  //An API route that allow user to return a book
  app.put('/api/users/:userId/books', historiesController.update);
};