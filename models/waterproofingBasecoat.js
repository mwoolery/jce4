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

// This model is managed by Team 4-14
//Mudduluru Saikrishna
//Malpani Sresth
//Govindu Madanamohan