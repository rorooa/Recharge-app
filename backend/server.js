const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/recharge')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Models
const User = require('./models/User');
const Transaction = require('./models/Transaction');
const Plan = require('./models/Plan');

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Recharge API is running' });
});

// Get plans for an operator
app.get('/api/plans/:operator', async (req, res) => {
  try {
    const { operator } = req.params;
    const plans = await Plan.find({ operator });
    res.json(plans);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/recharge', async (req, res) => {
  try {
    const { phone, operator, amount, paymentMethod } = req.body;
    
    // If DB is connected: 
    // const newTransaction = new Transaction({ phone, operator, amount, paymentMethod });
    // await newTransaction.save();
    
    res.json({ 
      success: true, 
      transactionId: `TXN${Math.floor(Math.random() * 100000)}`,
      message: 'Recharge successful' 
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
