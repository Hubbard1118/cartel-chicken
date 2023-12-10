const db = require('../config/connection');
const { Elements } = require('../models');
const cleanDB = require('./cleanDB');

const chemData = require('./elementData.json');

db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

db.once('open', async () => {
  try {
    await cleanDB('Elements', 'elements');

    // console.log(chemData);
    await Elements.insertMany(chemData);

    console.log('Elements seeded!');
    process.exit(0);
  }
  catch (err) {
    throw err;
  }
  
});
