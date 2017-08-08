const User = require('../models').User;

module.exports = {
  create(req, res) {
    return User
      .create({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        access: req.body.access,
      })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error.toString()));
  }, // end of create user i.e user signup controller
  login(req, res) {
    return User
      .create({
        username: req.body.username,
        password: req.body.password,
      })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  }, // end of user login
};