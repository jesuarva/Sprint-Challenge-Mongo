const mongoose = require('mongoose');
const ObjectId = mongose.Schema.Types.ObjectId;
const Schema = mongoose.Schema;

const Budget = new Schema({});

module.exports = mongoose.model('Budget', Budget);
