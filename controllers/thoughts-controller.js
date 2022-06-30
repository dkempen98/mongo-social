const { Users, Thoughts } = require('../models')

const thoughtsController = {
    // / routes
    getAllThoughts(req, res) {
        Thoughts.find()
        .select('-__v')
        .then((thoughtsData) => {res.json(thoughtsData)})
        .catch((err) => res.status(500).json(err))
    },
    createThought(req, res) {
        Thoughts.create(req.body)
            .then((newThought) => res.json(newThought))
            .catch((err) => {
                console.log(err);
                res.status(500).json(err)
            })
    },
    // /:id routes
    updateThought(req, res) {
        Thought.findOneAndUpdate(
            {_id: req.params.id},
            {$set: req.body},
            {runValidators: true, new: true}
        )
        .then((updatedThought) => res.json(updatedThought))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err)
        })
    },
    deleteThought(req, res) {

    },
    addReaction(req, res) {

    },
    removeReaction(req, res) {
        
    }
}

module.exports = thoughtsController