const mongoose = require('mongoose');

const TicketSchema = mongoose.Schema(
    {
        problem_class: {
            type: String,
            required: true,
        },

        problem_statement:{
            type: String,
            required: true,
        },
        
        customer_email:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },

        organizationID: {
            type: String,
            required: true,
        },

        role: {
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
