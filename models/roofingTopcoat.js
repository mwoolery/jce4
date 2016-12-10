var mongoose = require('mongoose')
  , Schema = mongoose.Schema

var RoofingTopcoatSchema = new Schema({
	_id: { type: Number, required: true },
    name:  { type: String, required: true },
    unit:  { type: String, required: true },
    displayorder:  { type: Number, required: true },
    price:  { type: Number, required: true }
})

var roofingTopcoat = mongoose.model('RoofingTopcoat', RoofingTopcoatSchema)
module.exports = roofingTopcoat
//This model is managed by Team 4-13
// Jonnalagadda Jaswanth
// Haritha Arikapudi
// Susmitha patlolla