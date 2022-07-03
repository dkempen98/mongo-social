const { Schema, Types } = require('mongoose')

const reactionSchema = new Schema({
    reactionId: { 
        type: Schema.Types.ObjectId, 
        default: () => new Types.ObjectId()
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
    userId: {
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

module.exports = reactionSchema