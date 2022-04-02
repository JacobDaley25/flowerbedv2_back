const mongoose = require('mongoose')

const strainSchema = new mongose.Schema({
  name: String,
  type: String,
  body: String,
  image: String
})
const Strain = mongoose.model('strains', strainSchema)

module.exports = Strains
