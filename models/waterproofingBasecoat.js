var mongoose = require('mongoose')
  , Schema = mongoose.Schema

var WaterproofingBasecoatSchema = new Schema({
    name:  { type: String, required: true },
    unit:  { type: String, required: true },
    displayorder:  { type: String, required: true },
    price:  { type: Number, required: true }
})

var waterproofingBasecoat = mongoose.model('WaterproofingBasecoat', WaterproofingBasecoatSchema)
module.exports = waterproofingBasecoat

// This data is managed by Team 4-14
// Sresth Malpani
// Sai Krishna Mudduluru
// Govindu Madanamohan Reddy 