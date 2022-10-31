const { User } = require('../models');

const userController = {
    // get all users
    getAllUsers(req, res) {
        User.find({})
            .then((users) => res.json(users))
            .catch((error) => res.status(500).json(error.msg));
    },
    // get user by id
    getUserById(req, res) {
        User.findOne({ _id: req.params.userId })
            .select('-__v')
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'User ID does not exist.' })
                    : res.json(user)
            )
            .catch((error) => res.status(500).json(error.msg));
    },
    // create user
    newUser(req, res) {
        User.create(req.body)
            .then((user) => res.json(user))
            .catch((error) => res.status(500).json(error.msg));
    },
}