const { ObjectId } = require('bson')
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
    },
    reactions: [reactionSchema],
},
{
    toJSON: {
        getters: true,
        virtuals: true,
    }
}
)

module.exports = Reactions