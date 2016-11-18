var express = require('express');
var api = express.Router();
var find = require('lodash.find');
var remove = require('lodash.remove');
var findIndex = require('lodash.findindex');
var Model = require('../models/flooringEstimate.js');
const notfoundstring = 'No such flooring Estimate';


// See app.js to find default view folder (e.g.,"views")
// see app.js to find  default URI for this controller (e.g., "waterpflooringPrimer")
// Specify the handler for each required combination of URI and HTTP verb 
// HTML5 forms can only have GET and POST methods (use POST for DELETE)


// HANDLE JSON REQUESTS --------------------------------------------
api.get('/findall', function(req, res){
    res.setHeader('Content-Type', 'application/json');
    var data = req.app.locals.flooringEstimates.query;
    res.send(JSON.stringify(data));
});
api.get('/findone/:id', function(req, res){
     res.setHeader('Content-Type', 'application/json');
    var id = parseInt(req.params.id);
    var data = req.app.locals.flooringEstimates.query;
    var item = find(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    res.send(JSON.stringify(item));
});


// flooring routing relative to views folder declared in app.js

// GET flooring default page
api.get("/", function (request, response) {
  response.render("flooring/flooring.ejs");
});



// GET all
api.get('/', function(req, res) {
    console.log("Handling GET " + req);
    return res.render('flooring/index.ejs',
        { title: "F Estimates", layout: "layout.ejs" });
});

// GET create
api.get("/create", function(req, res) {
    console.log('Handling GET /create' + req);
    res.render("flooring/create.ejs",
        { title: "F Estimates", layout: "layout.ejs" });
});

// GET /delete/:id
api.get('/delete/:id', function(req, res) {
    console.log("Handling GET /delete/:id " + req);
    var id = parseInt(req.params.id);
    var data = req.app.locals.flooringEstimates.query;
    var item = find(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    console.log("RETURNING VIEW FOR" + JSON.stringify(item));
    return res.render('flooring/delete.ejs',
        {
            title: "F Estimates",
            layout: "layout.ejs",
            flooringEstimate: item
        });
});

// GET /details/:id
api.get('/details/:id', function(req, res) {
    console.log("Handling GET /details/:id " + req);
    var id = parseInt(req.params.id);
    var data = req.app.locals.flooringEstimates.query;
    var item = find(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    console.log("RETURNING VIEW FOR" + JSON.stringify(item));
    return res.render('flooring/details.ejs',
        {
            title: "F Estimates",
            layout: "layout.ejs",
            flooringEstimate: item
        });
});

// GET one
api.get('/edit/:id', function(req, res) {
    console.log("Handling GET /edit/:id " + req);
    var id = parseInt(req.params.id);
    var data = req.app.locals.flooringEstimates.query;
    var item = find(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    console.log("RETURNING VIEW FOR" + JSON.stringify(item));
    return res.render('flooring/edit.ejs',
        {
            title: "F Estimates",
            layout: "layout.ejs",
            flooringEstimate: item
        });
});

// HANDLE EXECUTE DATA MODIFICATION REQUESTS --------------------------------------------

// POST new
api.post('/save', function(req, res) {
    console.log("Handling POST " + req);
    var data = req.app.locals.flooringEstimates.query;
    var item = new Model;
    console.log("NEW ID " + req.body._id);
    item._id = parseInt(req.body._id);
    item.name = req.body.name;
    item.unit = req.body.unit;
    item.price = req.body.price;
    item.displayorder = parseInt(req.body.displayorder);
    data.push(item);
    console.log("SAVING NEW ITEM " + JSON.stringify(item));
    return res.redirect('/flooringEstimate');
});

// POST update
api.post('/save/:id', function(req, res) {
    console.log("Handling SAVE request" + req);
    var id = parseInt(req.params.id);
    console.log("Handling SAVING ID=" + id);
    var data = req.app.locals.flooringEstimates.query;
    var item = find(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    console.log("ORIGINAL VALUES " + JSON.stringify(item));
    console.log("UPDATED VALUES: " + JSON.stringify(req.body));
    item.name = req.body.name;
    item.unit = req.body.unit;
    item.price = req.body.price;
    item.displayorder = req.body.displayorder;
    console.log("SAVING UPDATED ITEM " + JSON.stringify(item));
    return res.redirect('/flooringEstimate');
});

// DELETE id (uses HTML5 form method POST)
api.post('/delete/:id', function(req, res, next) {
    console.log("Handling DELETE request" + req);
    var id = parseInt(req.params.id);
    console.log("Handling REMOVING ID=" + id);
    var data = req.app.locals.flooringEstimates.query;
    var item = remove(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    console.log("Deleted item " + JSON.stringify(item));
    return res.redirect('/flooringEstimate');
});

module.exports = api;
// this controller managed by 4-01
//katta srikar reddy
//Ravulaparthi swami sai anuraag