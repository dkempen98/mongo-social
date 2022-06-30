const { Users, Thoughts } = require('../models')

const userController = {
    createUser(req, res) {
        Users.create(req.body)
            .then((newUser) => res.json(newUser))
            .catch((err) => {
                console.log(err);
                res.status(500).json(err)
            })
    },
    deleteUser(req, res) {
        Users.findOneAndDelete({username: req.params.username})
        .then(() => res.send(`User has been deleted`))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err)
        })

    },
    updateUser(req, res) {
        Users.findOneAndUpdate(
            {username: req.params.username},
            {$set: req.body},
            {runValidators: true, new: true}
        )
        .then((updatedUser) => res.json(updatedUser))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err)
        })
    },
    findUserByUsername(req, res) {
        Users.findOne({username: req.params.username})
        .select('-__v')
        .then((user) => res.json(user))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err)
        })
    },
    allUsers(req, res) {
        Users.find()
        .select('-__v')
        .then((usersData) => {res.json(usersData)})
        .catch((err) => res.status(500).json(err))
    }
}

module.exports = userController