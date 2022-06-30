const { Schema, model } = require('mongoose')

const reactionSchema = new Schema({
    reactionId: { 
        type: Schema.Types.ObjectId, 
        default: () => {new Types.ObjectId()}
    },
    reactionBody: { 
        type: String, 
        required: true, 
        max_length: 280
    },
    username: { 
        type: String, 
        required: true
    }
},
{
    toJSON: {
        getters: true,
        virtuals: true,
    }
}
)

// const Reactions = model('reactions', reactionSchema)

module.exports = reactionSchema