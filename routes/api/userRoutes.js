const router = require('express').Router();
const {
    createUser,
    deleteUser,
    updateUser,
    findUserByUsername,
    allUsers
} = require('../../controllers/users-controller')

// main user specific routes that should be at the top level of user calls
router.route('/').get(allUsers).post(createUser);

// routes specific to individual users that are already in the db
// Since id's are so long in Mongo and the usernames have to be unique I am using those instead of id's
router.route('/:username').get(findUserByUsername).put(updateUser).delete(deleteUser)

module.exports = router;