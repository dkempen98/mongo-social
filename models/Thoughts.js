const { Schema, model } = require('mongoose')
const date = require('date-and-time')
const reactionSchema = require('./Reactions')

// create thoughts schema, use a getter method to format the time

const thoughtSchema = new Schema({
        thoughtText: { 
            type: String, 
            required: true, 
            max_length: 280, 
            min_length: 1 
        },
        createdAt: { 
            type: Date, 
            default: Date.now(), 
            get: formatted
        },
        username: { 
            type: String, 
            required: true 
        },
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            getters: true
        }
    }
)

// Format time when queried

function formatted(time) {
    return date.format(time, 'MM/DD/YYYY HH:mm:ss')
}

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thoughts = model('thoughts', thoughtSchema)

module.exports = Thoughts;