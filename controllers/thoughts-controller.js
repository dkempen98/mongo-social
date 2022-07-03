const { Thoughts, Users } = require('../models')

const thoughtsController = {
    // / routes
    getAllThoughts(req, res) {
        Thoughts.find()
        .select('-__v')
        .then((thoughtsData) => {res.json(thoughtsData)})
        .catch((err) => res.status(500).json(err))
    },
    // This route does not add the thought to the user as it should, have tried resolving this for
    // awhile to no avail
    createThought(req, res) {
        Thoughts.create(req.body)
            .then((data) => {
                Users.findOneAndUpdate(
                    {username: req.body.username},
                    {$addToSet: { thoughts: data._id.valueOf() }},
                    {runValidators: true, new: true}
                )
            })
            .then((newThought) => res.json(newThought))
            .catch((err) => {
                console.log(err);
                res.status(500).json(err)
            })
    },
    // /:id routes
    findSingleThought(req, res) {
        Thoughts.findOne({_id: req.params.id})
        .select('-__v')
        .then((thought) => res.json(thought))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err)
        })
    },
    updateThought(req, res) {
        Thoughts.findOneAndUpdate(
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
        Thoughts.findOneAndDelete({_id: req.params.id})
            .then(() => res.send(`Thought has been deleted`))
            .catch((err) => {
                console.log(err);
                res.status(500).json(err)
        })
    },
    // /:id/reaction
    addReaction(req, res) {
        Thoughts.findOneAndUpdate(
            {_id: req.params.id},
            {$addToSet: {reactions: req.body}},
            {runValidators: true, new: true}
        )
        .then((thought) => {
            if(thought) {
                res.json(thought)
            } else {
                res.status(404).json({message: 'Thought not found'})
            }
        })
        .catch((err) => res.status(500).json(err))

    },
    // /:id/reaction/:reactionId route
    removeReaction(req, res) {
        Thoughts.findOneAndUpdate(
            {_id: req.params.id},
            {$pull: {reactions: {_id: req.params.reactionId}}},
            {runValidators: true, new: true}
        )
        .then((thought) => {
            if(thought) {
                res.json(thought)
            } else {
                res.status(404).json({message: 'Thought not found'})
            }
        })
        .catch((err) => res.status(500).json(err))
    }
}

module.exports = thoughtsController