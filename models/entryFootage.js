var mongoose = require('mongoose')
    , Schema = mongoose.Schema

var EntryFootageSchema = new Schema({
    description: { type: String, required: true },
    widthFeet: { type: Number, required: true, default: 10 },
    lengthFeet: { type: Number, required: true, default: 100 }
})

var entryFootage = mongoose.model('EntryFootage', EntryFootageSchema)
module.exports = entryFootage
// This model is managed by Team 4-4
// Amarishwer Edam
// Sivareddy Mekapothula
// Vikas Bavikadi