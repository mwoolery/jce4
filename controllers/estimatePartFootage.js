var express = require('express');
var api = express.Router();
var find = require('lodash.find');
var remove = require('lodash.remove');
var findIndex = require('lodash.findindex');
var Model = require('../models/estimatePartFootage.js');
const notfoundstring = 'No such estimatePartFootage';


// see app.js for the root request this controller handles

// GET to this controller root URI
api.get("/", function (request, response) {
 response.render("footage/index.ejs");
});

module.exports = api;
// See app.js to find default view folder (e.g.,"views")
// see app.js to find default URI for this controller (e.g., "waterproofingPrimer")
// Specify the handler for each required combination of URI and HTTP verb 
// HTML5 forms can only have GET and POST methods (use POST for DELETE)


// HANDLE JSON REQUESTS --------------------------------------------
api.get('/findone/:id', function(req, res){
     res.setHeader('Content-Type', 'application/json');
    var id = parseInt(req.params.id);
    var data = req.app.locals.estimatePartFootages.query;
    var item = find(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    res.send(JSON.stringify(item));
});
api.get('/findall', function(req, res){
res.setHeader('Content-Type', 'application/json');
var data = req.app.locals.estimatePartFootages.query;
res.send(JSON.stringify(data));
});
api.get("/delete", function(request, response){
response.render("footage/delete.ejs")
});
api.get("/create", function(request, response){
response.render("footage/create.ejs")
});
api.get("/edit", function(request, response){
response.render("footage/edit.ejs")
});
api.get("/details", function(request, response){
response.render("footage/details.ejs")
});
// This model is managed by Team 4-4
// Amarishwer Edam
// Sivareddy Mekapothula
// Vikas Bavikadi