const { User } = require('../models');

const userController = {
    getAllUsers(req, res) {
        User.find({})
            .then((users) => res.json(users))
            .catch((error) => res.status(500).json(error.msg));
    }
}