const mongoose = require('mongoose');

const TicketSchema = mongoose.Schema(
    {
        subject: {
            type: String,
            required: true,
        },

        description:{
            type: String,
            required: true,
        },
        
        customer_id:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },

        status: {
            type: String,
            required: true,
        },

        priority: {
            type:String,
            required: false,
        },
        
    },
    {
        timestamps: true,
    }
);

const Ticket = mongoose.model("Ticket", TicketSchema);

module.exports = Ticket;