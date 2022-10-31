const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../../controllers/userController');


// prep GET all and POST /api/users
router
    .route('/')
    .get(getAllUsers)
    .post(createUser)

