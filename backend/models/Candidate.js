const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let candidateSchema = new Schema({
  full_name: {
    type: String
  },
  picture: {
    type: Number
  },
  position: {
    type: String
  },
  location: {
    type: String
  },
  years_exp: {
    type: Number
  }
}, {
    collection: 'candidates'
  })

module.exports = mongoose.model('Candidate', candidateSchema)