var mongoose = require('mongoose')
  , Schema = mongoose.Schema

var WaterproofingTopcoatSchema = new Schema({
    _id: { type: Number, required: true },
    name:  { type: String, required: true },
    unit:  { type: String, required: true },
    displayorder:  { type: Number, required: true },
    price:  { type: Number, required: true }
})

var waterproofingTopcoat = mongoose.model('WaterproofingTopcoat', WaterproofingTopcoatSchema)
module.exports = waterproofingTopcoat

// This data is managed by Team 4-14
// Sresth Malpani
// Sai Krishna Mudduluru
// Govindu Madanamohan Reddy 