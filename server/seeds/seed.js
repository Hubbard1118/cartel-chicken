const db = require('../config/connection');
const { Elements, Compounds } = require('../models');
const cleanDB = require('./cleanDB');

const chemData = require('./elementData.json');
const compData = require('./compoundData.json');

db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

db.once('open', async () => {
  try {
    await cleanDB('Elements', 'elements');

    // console.log(chemData);
    await Elements.insertMany(chemData);

    await cleanDB('Compounds', 'compounds');

    // console.log(chemData);
    await Compounds.insertMany(compData);

    console.log('Elements seeded!');
    process.exit(0);
  }
  catch (err) {
    throw err;
  }
  
});





