const router = require("express").Router();
const {
    getAllThoughts,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReation
} = require('../../controllers/thoughts-controller')

router.route('/').get(getAllThoughts).post(createThought)

module.exports = router