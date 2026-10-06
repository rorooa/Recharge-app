const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Plan = require('./models/Plan');

dotenv.config();

const plans = [
  // Jio
  { operator: 'Jio', price: 249, data: '1 GB / Day', validity: '28 Days', type: 'Popular' },
  { operator: 'Jio', price: 666, data: '1.5 GB / Day', validity: '70 Days' },
  { operator: 'Jio', price: 3599, data: '2.5 GB / Day', validity: '365 Days', type: 'Annual' },
  { operator: 'Jio', price: 899, data: '2 GB / Day', validity: '90 Days', type: 'Hero' },
  { operator: 'Jio', price: 999, data: '2 GB / Day', validity: '98 Days' },
  { operator: 'Jio', price: 299, data: '1.5 GB / Day', validity: '28 Days' },
  { operator: 'Jio', price: 3999, data: '2.5 GB / Day', validity: '365 Days', type: 'Annual' },
  
  // Airtel
  { operator: 'Airtel', price: 179, data: '2 GB', validity: '28 Days' },
  { operator: 'Airtel', price: 265, data: '1 GB / Day', validity: '28 Days' },
  { operator: 'Airtel', price: 299, data: '1.5 GB / Day', validity: '28 Days', type: 'Hero' },
  { operator: 'Airtel', price: 359, data: '2 GB / Day', validity: '28 Days', type: 'Popular' },
  { operator: 'Airtel', price: 479, data: '1.5 GB / Day', validity: '56 Days' },
  { operator: 'Airtel', price: 719, data: '1.5 GB / Day', validity: '84 Days', type: 'Popular' },
  { operator: 'Airtel', price: 2999, data: '2 GB / Day', validity: '365 Days', type: 'Annual' },

  // BSNL
  { operator: 'BSNL', price: 153, data: '1 GB / Day', validity: '24 Days' },
  { operator: 'BSNL', price: 199, data: '2 GB / Day', validity: '28 Days', type: 'Hero' },
  { operator: 'BSNL', price: 225, data: '3 GB / Day', validity: '30 Days' },
  { operator: 'BSNL', price: 347, data: '2.5 GB / Day', validity: '50 Days', type: 'Popular' },
  { operator: 'BSNL', price: 599, data: '3 GB / Day', validity: '70 Days' },
  { operator: 'BSNL', price: 2399, data: '2.5 GB / Day', validity: '365 Days', type: 'Annual' },
];

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/recharge')
  .then(async () => {
    console.log('MongoDB connected for seeding');
    await Plan.deleteMany({}); // Clear existing plans
    await Plan.insertMany(plans);
    console.log('Plans seeded successfully!');
    mongoose.disconnect();
  })
  .catch(err => console.error(err));
