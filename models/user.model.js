const mongoose = require('mongoose');

const UserSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },

        email:{
            type: String,
            required: false,
        },

        role: {
            type: String,
            required: true,
        },
        organizationID: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Organization',
        }

    },
    {
        timestamps: true,
    }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
