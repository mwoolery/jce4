var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , WaterproofingBasecoat = require('./waterproofingBasecoat.js')
  , WaterproofingPrimer = require('./waterproofingPrimer.js')
  , WaterproofingTopcoat = require('./waterproofingTopcoat.js')

var EstimatePartWaterpWaterproofingSchema = new Schema({
  _id: { type: Number, required: true },
  productType: { type: String, required: true, default: 'Urethane', enum: ['Urethane', 'Cementicious Overlay'] },

  usesUrethane: { type: Boolean, required: true, default: false },
  urethaneSelection: [{ type: Schema.Types.ObjectId, ref: WaterproofingUrethane, required: false }],
  urethaneCoverageSqFt: { type: Number, required: true },

  usesExpoxy: { type: Boolean, required: true, default: false },
  expoxySelection: [{ type: Schema.Types.ObjectId, ref: WaterproofingExpoxy, required: false }],
  epoxyCoverageSqFt: { type: Number, required: true },

  usesUrethanePrimer: { type: Boolean, required: true, default: false },
  urethanePrimerSelection: [{ type: Schema.Types.ObjectId, ref: WaterproofingUrethanePrimer, required: false }],
  urethanePrimerCoverageSqFt: { type: Number, required: true },

  usesBasecoat: { type: Boolean, required: true, default: false },
  basecoatSelection: [{ type: Schema.Types.ObjectId, ref: WaterproofingBasecoat, required: false }],
  basecoatCoverageSqFt: { type: Number, required: true },

  usesPrimer: { type: Boolean, required: true, default: false },
  primerSelection: [{ type: Schema.Types.ObjectId, ref: WaterproofingPrimer, required: false }],
  primerCoverageSqFt: { type: Number, required: true },

  usesTopcoat: { type: Boolean, required: true, default: false },
  topcoatSelection: [{ type: Schema.Types.ObjectId, ref: WaterproofingTopcoat, required: false }],
  topcoatCoverageSqFt: { type: Number, required: true },

  subtotal: { type: Number, required: true, default: 0 }
})

var estimatePartWaterpWaterproofing = mongoose.model('EstimatePartWaterpWaterproofing', EstimatePartWaterpWaterproofingSchema)
module.exports = estimatePartWaterpWaterproofing

	// These Views are managed by Team 04-07 
// KamalaPriya Bharam
//Sirisha, Vanamali 
