const { Thought, User } = require('../models');

module.exports = {
    // get all thoughts
    getAllThoughts(req, res) {
        Thought.find({})
            .then(thoughts => res.json(thoughts))
            .catch((error) => res.status(500).json(error.msg));
    },

}