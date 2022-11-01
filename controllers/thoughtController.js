const { Thought, User } = require('../models');

module.exports = {
    // get all thoughts
    getAllThoughts(req, res) {
        Thought.find({})
            .then(thoughts => res.json(thoughts))
            .catch((error) => res.status(500).json(error.msg));
    },
    // get thought by id
    getThoughtById(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
            .select("-___v")
            .then((thought) =>
                !thought
                    ? res.status(400).json({ message: 'Thought ID does not exist.' })
                    : res.json(thought)
            )
            .catch((error) => res.status(500).json(error.msg));
    },
    // create new thought
    newThought(req, res) {
        Thought.create(req.body)
            .then((thought) => res.json(thought))
            .catch((error) => res.status(500).json(error.msg));
    },
}