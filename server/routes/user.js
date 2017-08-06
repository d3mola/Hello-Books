/*
const User = require('../models/index.js').User

module.exports = (app) => {
    app.post('/signup', (req, res) => {
        User.create(req.body)
        .then(user => res.send(user))
        .catch(err => res.send(err));
    });
}

const usersController = require('../controllers').users;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Hello Books!',
  }));

  app.post('/api/todos', usersController.create);
};

*/