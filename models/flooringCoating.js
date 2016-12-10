var mongoose = require('mongoose')
    , Schema = mongoose.Schema

var FlooringCoatingSchema = new Schema({
    _id: { type: Number, required: true },
    name: { type: String, required: true },
    unit: { type: String, required: true },
    displayorder: { type: String, required: true },
    price: { type: Number, required: true }
})

var flooringCoating = mongoose.model('FlooringCoating', FlooringCoatingSchema)
module.exports = flooringCoating

/*
Team Set R12
Rakesh Reddy Pakala
Harsha Vardhan Reddy Mallipatllola
*/