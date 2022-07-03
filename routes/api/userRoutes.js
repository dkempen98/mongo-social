const router = require('express').Router();
const {
    createUser,
    deleteUser,
    updateUser,
    findUserByUsername,
    allUsers,
    addFriend,
    removeFriend
} = require('../../controllers/users-controller')

// main user specific routes that should be at the top level of user calls
router.route('/').get(allUsers).post(createUser);

// routes specific to individual users that are already in the db
// Since id's are so long in Mongo and the usernames have to be unique I am using those instead of id's
router.route('/:username').get(findUserByUsername).put(updateUser).delete(deleteUser)

// add friend route
router.route('/:username/add/:friendUsername').put(addFriend)

// remove friend route
router.route('/:username/remove/:friendUsername').put(removeFriend)

module.exports = router;