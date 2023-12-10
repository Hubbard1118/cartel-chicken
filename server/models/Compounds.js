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
    maxlength: 8
  },
  molecularWeight: {
    type: Number,
    required: true
  }
});

const Compound = mongoose.model('Compound', CompoundSchema);

module.exports = Compound;
