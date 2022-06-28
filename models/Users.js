const { Schema, model } = require('mongoose')

// Create schema for Users and create entries

const userSchema = new Schema({
        username: { type: String, required: true, unique: true, trimmed: true },
        email: { type: String, required: true, unique: true, match: /.+\@.+\..+/ },
        thoughts: [{ type: Schema.Types.ObjectId, ref: 'thoughts' }],
        friends: [{ type: Schema.Types.ObjectId, ref: 'friends' }],
    },
    {
        toJSON: {
            virtuals: true,
        }
    }
)

// use virtual to add friend count

userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

const Users = model('users', userSchema);

module.exports = Users
