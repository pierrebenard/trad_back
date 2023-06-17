const mongoose = require('mongoose');

const tradReqSchema = mongoose.Schema({
    ticketNumber: { type: Number, required: true },
    magicNumber: { type: Number, required: true },
    dateAndTimeOpening:  { type: Date, required: true },
    typeOfTransaction: { type: String, required: true },
    volume: { type: Number, required: true },
    symbole: { type: String, required: true },
    priceOpening: { type: Number, required: true },
    stopLoss: { type: Number, required: true },
    takeProfit: { type: Number, required: true },
    dateAndTimeClosure: { type: Date, required: true },
    priceClosure: { type: Number, required: true },
    swap: { type: Number, required: true },
    profit: { type: Number, required: true },
    commision: { type: Number, required: true },
    closurePosition: { type: String, required: true },
    username: {type: String, required: true},
    password: { type: String, required: true }
});

module.exports = mongoose.model('Things', tradReqSchema);
