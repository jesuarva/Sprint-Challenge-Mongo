const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
const Schema = mongoose.Schema;

const X = new Schema({});

module.exports = mongoose.model('X', X);
