const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  phone: { type: String, required: true },
  operator: { type: String, required: true },
  amount: { type: Number, required: true },
  planDetails: { type: String }, // e.g., "1.5 GB / Day, 28 Days"
  status: { type: String, enum: ['Success', 'Failed', 'Pending'], default: 'Success' },
  paymentMethod: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Transaction', transactionSchema);
