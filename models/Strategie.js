const mongoose = require('mongoose');

const StrategieSchema = mongoose.Schema({
    username: { type: String, required: true },
    nomStrategie: { type: String, required: true }
});

module.exports = StrategieSchema;