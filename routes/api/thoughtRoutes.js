
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

// prep GET all and POST /api/thoughts
router
    .route('/')
    .get(getAllThoughts)
    .post(createThought)