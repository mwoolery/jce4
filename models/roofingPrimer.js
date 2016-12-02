var mongoose = require('mongoose')
  , Schema = mongoose.Schema

var RoofingPrimerSchema = new Schema({
  _id: { type: Number, required: true },
  name: { type: String, required: true },
  unit: { type: String, required: true },
  displayorder: { type: Number, required: true },
  price: { type: Number, required: true }
})

var roofingPrimer = mongoose.model('RoofingPrimer', RoofingPrimerSchema)
module.exports = roofingPrimer
// This model is managed by Team 4-13
// Jaswanth Jonnalagadda
// Haritha Arikapudi
//Sushmitha Patlola