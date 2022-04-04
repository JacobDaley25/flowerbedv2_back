const mongoose = require('mongoose')

const growSchema = new mongoose.Schema({
  name:String,
  lights:String,
  indoorOrOutdoor: String,
  image: String,
  growingMedium: String,
  nutrientsUsed: String,
  week: Number,
  harvestAmount:String,
  replies: []
})
const Grow = mongoose.model('grows', growSchema)

module.exports = Grow
