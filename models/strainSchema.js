const mongoose = require('mongoose')

const strainSchema = new mongoose.Schema({
  name: String,
  type: String,
  body: String,
  image: String
})
const Strain = mongoose.model('strains', strainSchema)

module.exports = Strain
