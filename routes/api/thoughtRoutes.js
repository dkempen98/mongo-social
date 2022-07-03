const router = require("express").Router();
const {
    getAllThoughts,
    createThought,
    findSingleThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
} = require('../../controllers/thoughts-controller')

router.route('/').get(getAllThoughts).post(createThought)

router.route('/:id').get(findSingleThought).put(updateThought).delete(deleteThought)

router.route('/:id/reaction').put(addReaction)

router.route('/:id/reaction/:reactionId').put(removeReaction)

module.exports = router