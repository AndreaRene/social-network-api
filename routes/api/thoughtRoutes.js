
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
    .post(newThought)

// prep GET, PUT, and DELETE by ID /api/thoughts/:id
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);