var mongoose = require('mongoose')
  , Schema = mongoose.Schema

var RoofingBasecoatsSchema = new Schema({
    name:  { type: String, required: true },
    unit:  { type: String, required: true },
    displayorder:  { type: String, required: true },
    price:  { type: Number, required: true }
})

var roofingBasecoat = mongoose.model('RoofingBasecoat', RoofingBasecoatsSchema)
module.exports = roofingBasecoat
//This model is managed by Team 4-13
// Jonnalagadda Jaswanth
// Haritha Arikapudi
// Susmitha patlolla