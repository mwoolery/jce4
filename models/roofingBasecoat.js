var mongoose = require('mongoose')
  , Schema = mongoose.Schema

var RoofingBasecoatSchema = new Schema({
  _id: { type: Number, required: true },
  name: { type: String, required: true },
  unit: { type: String, required: true },
  displayorder: { type: Number, required: true },
  price: { type: Number, required: true }
})

var roofingBasecoat = mongoose.model('RoofingBasecoat', RoofingBasecoatSchema)
module.exports = roofingBasecoat
// This model is managed by Team 4-13
// Jaswanth Jonnalagadda
// Haritha Arikapudi
//Sushmitha Patlola