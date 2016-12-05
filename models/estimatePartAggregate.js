var mongoose = require('mongoose')
    , Schema = mongoose.Schema
    , AggregateMaterial = require('./aggregateMaterial.js')

var EstimatePartAggregateSchema = new Schema({
     _id: { type: Number, required: true },
    isUsed: { type: Boolean, required: true, default: false },
    aggregateTypeSelection: { type: String, required: true, default: 'Sand',  enum: ['Sand', 'Quartz', 'Flake', 'Glass Beads']  },
    aggregateMaterialSelection: {type:String},
    coverageSqFt:  { type: Number, required: true},
    subtotal: { type: Number, required: true, default: 0 }
})

/**
 * How it was before : Changed on 12/2/2016 to fix the problem with aggregateMaterialSelection 
 * var EstimatePartAggregateSchema = new Schema({
     _id: { type: Number, required: true },
    isUsed: { type: Boolean, required: true, default: false },
    aggregateTypeSelection: { type: String, required: true, default: 'Sand',  enum: ['Sand', 'Quartz', 'Flake', 'Glass Beads']  },
    aggregateMaterialSelection: [{ type: Schema.Types.ObjectId, ref: AggregateMaterial, required: false}],
    coverageSqFt:  { type: Number, required: true},
    subtotal: { type: Number, required: true, default: 0 }
})
 */

var estimatePartAggregate = mongoose.model('estimatePartAggregate', EstimatePartAggregateSchema)
module.exports = estimatePartAggregate

// This model is managed by Team R09
// Sandip Subedi
//Dhanalakota Neelesh Varma
// Matthew Woolery