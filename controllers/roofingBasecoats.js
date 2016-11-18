var express = require('express');
var api = express.Router();
var find = require('lodash.find');
var remove = require('lodash.remove');
var findIndex = require('lodash.findindex');
var Model = require('../models/waterproofingPrimer.js');
const notfoundstring = 'No such waterproofing primer';



// See app.js to find default view folder (e.g.,"views")
// see app.js to find  default URI for this controller (e.g., "waterproofingPrimer")
// Specify the handler for each required combination of URI and HTTP verb 
// HTML5 forms can only have GET and POST methods (use POST for DELETE)

// HANDLE JSON REQUESTS --------------------------------------------


// see app.js for the root request this controller handles

// GET to this controller root URI
var app = express();

api.get("/", function (req, res) {
  return res.render('roofing_basecoats/index.ejs');
});


api.get("/details", function (req, res) {
  return res.render('./roofing_basecoats/details.ejs');
});

api.get("/create", function (req, res) {
  return res.render('./roofing_basecoats/create.ejs');
});

api.get("/edit", function (req, res) {
  return res.render('./roofing_basecoats/edit.ejs');
});
api.get("/delete", function (req, res) {
  return res.render('./roofing_basecoats/delete.ejs');
});

api.get('/findall', function(req, res){
    res.setHeader('Content-Type', 'application/json');
    var data = req.app.locals.roofingBasecoats.query;
    res.send(JSON.stringify(data));
});





module.exports = api;
// These views are managed by Team 4-13
// Jaswanth Jonnalagadda
// Haritha Arikapudi
// Susmitha patlolla