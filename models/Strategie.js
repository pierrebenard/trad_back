const mongoose = require('mongoose');

const StrategieSchema = mongoose.Schema({
    nomStrategie: { type: String, required: true },
    username: { type: String, required: true }
});

module.exports = StrategieSchema;