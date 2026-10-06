const mongoose = require('mongoose');

const planSchema = new mongoose.Schema({
  operator: { type: String, required: true },
  price: { type: Number, required: true },
  data: { type: String, required: true }, // e.g., "1.5 GB / Day"
  validity: { type: String, required: true }, // e.g., "28 Days"
  type: { type: String }, // e.g., "Hero", "Popular"
});

module.exports = mongoose.model('Plan', planSchema);
