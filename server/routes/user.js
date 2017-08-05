const User = require('../models/index.js').User

module.exports = (app) => {
    app.post('/signup', (req, res) => {
        User.create(req.body)
        .then(user => res.send(user))
        .catch(err => res.send(err));
    });
}