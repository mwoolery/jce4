var express = require('express');
var api = express.Router();
var find =  require('lodash.remove');
var findIndex = require('lodash.remove');
var Model = require('../models/estimatePartAggregate.js');
const notfoundstring = 'No such Estimate Part Aggregate';


// see app.js for the root request this controller handles

// see app.js to find  default URI for this controller (e.g., "waterproofingPrimer")
// Specify the handler for each required combination of URI and HTTP verb 
// HTML5 forms can only have GET and POST methods (use POST for DELETE)


// HANDLE JSON REQUESTS --------------------------------------------
api.get('/findall', function(req,res){
  res.setHeader('Content-Type','application/json');
  var data = req.app.locals.estimatePartAggregates.query;
  res.send(JSON.stringify(data));
});


// GET to this controller root URI
api.get("/", function (request, response) {
  response.render("aggregate_cost/index.ejs");
});




module.exports = api; // at the very end

// This model is managed by Team R09
// Sandip Subedi
// Matthew Woolery
