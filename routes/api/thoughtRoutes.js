
const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    newThought,
    updateThought,
    deleteThought,
    newReaction,
    deleteReaction
} = require('../../controllers/thought-controller');