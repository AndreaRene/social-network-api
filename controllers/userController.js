const { User, Thought } = require('../models');

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
    // create new user
    newUser(req, res) {
        User.create(req.body)
            .then((user) => res.json(user))
            .catch((error) => res.status(500).json(error.msg));
    },
    // update user by id
    updateUser(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .then((user) =>
                !User
                    ? res.status(404).json({ message: 'User ID does not exist.' })
                    : res.json(user)
            )
            .catch((error) => res.status(500).json(error));
    },
    // delete user by id
    deleteUser(req, res) {
        User.findByIdAndDelete({ _id: req.params.userId })
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'User ID does not exist' })
                    : Thought.deleteMany({ _id: { $in: user.thoughts } })
            )
            .then(() => res.json({ message: 'User successfully deleted' }))
            .catch((error) => res.status(500).json(error));
    },
}