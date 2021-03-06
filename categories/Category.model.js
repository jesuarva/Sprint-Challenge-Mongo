const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
const Schema = mongoose.Schema;

const Category = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  expenses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Expense' }],
});

module.exports = mongoose.model('Category', Category, 'categories');
