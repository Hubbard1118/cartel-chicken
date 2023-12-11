const mongoose = require('mongoose');

// Define the schema for an compounds
const CompoundSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  formula: {
    type: String,
    required: true,
  },
  molecularWeight: {
    type: Number,
  }
});

const Compound = mongoose.model('Compound', CompoundSchema);

module.exports = Compound;
