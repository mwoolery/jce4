var mongoose = require('mongoose')
  , Schema = mongoose.Schema
   , EntryLabor = require('./entryLabor.js')

var EstimatePartLaborSchema = new Schema({
     entries: [{
        entry: { type: Schema.Types.ObjectId, ref: EntryLabor },
    }],
    subtotal:  { type: Number, required: true, default: 0 }
})

var estimatePartLabor = mongoose.model('EstimatePartLabor', EstimatePartLaborSchema)
module.exports = estimatePartLabor
<<<<<<< HEAD
// This model is managed by Team 4-10
=======
//This model is managed by Team 4-10
>>>>>>> e674d9f29f4a9ca0ff363d45ea56c0f2ecc407ea
//Gudavalli Jagadeesh
//Mourya