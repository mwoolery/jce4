var express = require('express');
var api = express.Router();
var find = require('lodash.find');
var remove = require('lodash.remove');
var findIndex = require('lodash.findindex');
var Model = require('../models/roofingEstimate.js');
const notfoundstring = 'No such roofing Estimates';

// roofing routing relative to views folder declared in app.js
// See app.js to find default view folder (e.g.,"views")
// see app.js to find  default URI for this controller (e.g., "waterproofingPrimer")
// Specify the handler for each required combination of URI and HTTP verb 
// HTML5 forms can only have GET and POST methods (use POST for DELETE)
// HANDLE JSON REQUESTS --------------------------------------------
api.get('/findall', function(req, res){
    res.setHeader('Content-Type', 'application/json');
    var data = req.app.locals.roofingEstimates.query;
    res.send(JSON.stringify(data));
});


api.get('/findone/:id', function(req, res){
     res.setHeader('Content-Type', 'application/json');
    var id = parseInt(req.params.id);
    var data = req.app.locals.roofingEstimates.query;
    var item = find(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    res.send(JSON.stringify(item));
});


// GET roofing default page
api.get("/", function (request, response) {
  response.render("roofing/roofing.ejs");
});

// GET to this controller root URI
api.get("/create", function (request, response) {
  response.render("roofing/create.ejs");
});

api.post('/save', function(req, res) {
     console.log("Handling POST " + req);
     var data = req.app.locals.roofingEstimates.query;
     var item = new Model;
     console.log("NEW ID " + req.body._id);
     item._id = parseInt(req.body._id);
    // item.estimatePartAbout.client = req.body.Client;
    // item.estimatePartAbout.created = req.body.Created;
    // item.estimatePartAbout.address = req.body.Address;
    // item.estimatePartAbout.city = req.body.City;
    // item.estimatePartAbout.state = req.body.State;
    // item.estimatePartAbout.zipcode = req.body.zipcode;
    // item.estimateSquareFootage.sqft = req.body.Squre_Footage;
    // item.costPerSquareFoot = req.body.CostPerSquareFoot;
    // item.bidPerSquareFoot = req.body.BidPerSquareFoot;
     return res.redirect('/roofingEstimate');
});

// GET /details/:id
api.get('/details/:id', function(req, res) {
    console.log("Handling GET /details/:id " + req);
    var id = parseInt(req.params.id);
    var data = req.app.locals.roofingEstimates.query;
    var item = find(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    console.log("RETURNING VIEW FOR" + JSON.stringify(item));
    return res.render("roofing/details.ejs",
        {
            title: "Roofing Estimate",
            layout: "layout.ejs",
            roofingEstimate: item
        });
});

// GET one Edit
api.get('/edit/:id', function(req, res) {
    console.log("Handling GET /edit/:id " + req);
    var id = parseInt(req.params.id);
    var data = req.app.locals.roofingEstimates.query;
    var item = find(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    console.log("RETURNING VIEW FOR" + JSON.stringify(item));
    return res.render('roofing/edit.ejs',
        {
            title: "Roofing Estimate",
            layout: "layout.ejs",
            roofingEstimate: item
        });
});

//Edit Roofing Estimate SAVE
// POST update
api.post('/save/:id', function(req, res) {
    console.log("Handling SAVE request" + req);
    var id = parseInt(req.params.id);
    console.log("Handling SAVING ID=" + id);
    var data = req.app.locals.roofingEstimates.query;
    var item = find(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    console.log("ORIGINAL VALUES " + JSON.stringify(item));
    console.log("UPDATED VALUES: " + JSON.stringify(req.body));
    item.estimatePartAbout.client = req.body.Client;
    item.estimatePartAbout.created = req.body.Created;
    item.estimatePartAbout.address = req.body.Address;
    item.estimatePartAbout.city = req.body.City;
    item.estimatePartAbout.state = req.body.State;
    item.estimatePartAbout.zipcode = req.body.zipcode;
    item.estimateSquareFootage.sqft = req.body.Squre_Footage;
    item.costPerSquareFoot = req.body.CostPerSquareFoot;
    item.bidPerSquareFoot = req.body.BidPerSquareFoot;
    
    console.log("SAVING UPDATED ITEM " + JSON.stringify(item));
    return res.redirect('/roofingEstimate');
});

// GET on Delete
api.get('/delete/:id', function(req, res) {
    console.log("Handling GET /delete/:id " + req);
    var id = parseInt(req.params.id);
    var data = req.app.locals.roofingEstimates.query;
    var item = find(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    console.log("RETURNING VIEW FOR" + JSON.stringify(item));
    return res.render("roofing/delete.ejs",
        {
            title: "Roofing Estimate",
            layout: "layout.ejs",
            roofingEstimate: item
        });
});

// DELETE id (uses HTML5 form method POST)
api.post('/delete/:id', function(req, res, next) {
    console.log("Handling DELETE request" + req);
    var id = parseInt(req.params.id);
    console.log("Handling REMOVING ID=" + id);
    var data = req.app.locals.roofingEstimates.query;
    var item = remove(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    console.log("Deleted item " + JSON.stringify(item));
    return res.redirect('/roofingEstimate');
});

module.exports = api;

//Controller modified by team 04  R02
//Adam Pool
//Robert Carstensen 

//2 Respond with JSON:

//http://127.0.0.1:8081/roofingEstimate/findall [WORKING]
//http://127.0.0.1:8081/roofingEstimate/findone/1 [WORKING]

//5 Respond with CRUD Views:

//http://127.0.0.1:8081/roofingEstimate[WORKING]
//http://127.0.0.1:8081/roofingEstimate/create [WORKING]
//http://127.0.0.1:8081/roofingEstimate/delete/1 [WORKING]
//http://127.0.0.1:8081/roofingEstimate/details/1 [WORKING]
//http://127.0.0.1:8081/roofingEstimate/edit/1 [WORKING]

//3 Respond by executing CRUD actions:

//http://127.0.0.1:8081/roofingEstimate/save [404 error]
//http://127.0.0.1:8081/roofingEstimate/save/1 [404 error]
//http://127.0.0.1:8081/roofingEstimate/delete/1 [WORKING]