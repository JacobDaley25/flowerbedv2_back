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
  replies: [{
    username: String,
    body: String
  }]
})
const Grow = mongoose.model('grows', growSchema)

module.exports = Grow
