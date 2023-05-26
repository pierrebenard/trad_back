const mongoose = require('mongoose');

const tradReqSchema = mongoose.Schema({
    positionNumber: { type: Number, required: true },
    dateAndTimeOpening:  { type: Number, required: true },
    typeOfTransaction: { type: String, required: true },
    volume: { type: Number, required: true },
    symbole: { type: String, required: true },
    priceOpening: { type: Number, required: true },
    stopLoss: { type: Number, required: true },
    takeProfit: { type: Number, required: true },
    dateAndTimeClosure: { type: Number, required: true },
    priceClosure: { type: Number, required: true },
    swap: { type: Number, required: true },
    profit: { type: Number, required: true },
});

module.exports = mongoose.model('Things', tradReqSchema);