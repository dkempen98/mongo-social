const { Schema, model } = require('mongoose')

// create thoughts schema, use a getter method to format the time

const thoughtSchema = new Schema({
        thoughtText: { type: String, required: true, maxLength: 128, minLength: 1 },
        createdAt: { type: Date, default: Date.now, get: formatted },
        username: { type: String, required: true },
        reactions: [{ type: Schema.Types.ObjectId, ref: 'reactions' }]
    }
)

// Format time when queried

function formatted(time) {
    console.log(time.toLocalString('en-US'))
    return time.toLocalString('en-US')
}

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thoughts = model('thoughts', thoughtSchema)

Thoughts.create({ thoughtText: 'thought', username: 'Drewk' }, (err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log(data)
    }
})

module.exports = Thoughts;