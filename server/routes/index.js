const usersController = require('../controllers').users;
const booksController = require('../controllers').books;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Hello Books!',
  }));

  app.post('/api/users/signup', usersController.create);
  app.post('/api/users/signin', usersController.login);  
  
  // Route to add a book
  app.post('/api/books', booksController.create);
  //app.put('/api/books/<bookId>', booksController.login);

  // Route to get all books in the library
  app.get('/api/books', booksController.list);
  //app.get(' /api/users/<userId>/books?returned=false', booksController.login);
  //app.post('/api/users/<userId>/books', booksController.login);
  //app.put('/api/users/<userId>/books', booksController.login);
};