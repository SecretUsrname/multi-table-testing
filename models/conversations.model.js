const mongoose = require('mongoose');

const conversations = mongoose.Schema(
    {
        ticket_id: {
            type: String,
            required: true,
            ref: 'tickets'
        },

        tech_exp_id:{
            type: String,
            required: true,
        },

        response: {
            type: String,
            required: true,
        },
        reason_of_closing: {
            type: String,
            required: false,
        },

    },
    {
        timestamps: false,
    }
);

const Conversation = mongoose.model("Conversation", conversations);

module.exports = Conversation;
