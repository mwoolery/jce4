var express = require('express');
var api = express.Router();
var find = require('lodash.find');
var remove = require('lodash.remove');
var findIndex = require('lodash.findindex');
var Model = require('../models/estimatePartFootage.js');
const notfoundstring = 'No such waterproofing primer';

// See app.js to find default view folder (e.g.,"views")
// see app.js to find  default URI for this controller (e.g., "waterproofingPrimer")   
// Specify the handler for each required combination of URI and HTTP verb 
// HTML5 forms can only have GET and POST methods (use POST for DELETE)

// HANDLE JSON REQUESTS --------------------------------------------

api.get('/findall', function(req, res){
    res.setHeader('Content-Type', 'application/json');
    var data = req.app.locals.estimatePartFootages.query;
    res.send(JSON.stringify(data));
});

api.get('/findone/:id', function(req, res){
     res.setHeader('Content-Type', 'application/json');
    var id = parseInt(req.params.id);
    var data = req.app.locals.estimatePartFootages.query;
    var item = find(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    res.send(JSON.stringify(item));
});

// HANDLE VIEW DISPLAY REQUESTS --------------------------------------------

// GET all
api.get('/', function(req, res) {
    console.log("Handling GET " + req);
    return res.render('footage/index.ejs',
        { title: "WP Primers", layout: "layout.ejs" });
});

// GET create
api.get("/create", function(req, res) {
    console.log('Handling GET /create' + req);
    res.render("footage/create.ejs",
        { title: "WP Primers", layout: "layout.ejs" });
});

// GET /delete/:id
api.get('/delete/:id', function(req, res) {
    console.log("Handling GET /delete/:id " + req);
    var id = parseInt(req.params.id);
    var data = req.app.locals.estimatePartFootages.query;
    var item = find(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    console.log("RETURNING VIEW FOR" + JSON.stringify(item));
    return res.render('footage/delete.ejs',
        {
            title: "WP Primers",
            layout: "layout.ejs",
            estimatePartFootage: item
        });
});

// GET /details/:id
api.get('/details/:id', function(req, res) {
    console.log("Handling GET /details/:id " + req);
    var id = parseInt(req.params.id);
    var data = req.app.locals.estimatePartFootages.query;
    var item = find(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    console.log("RETURNING VIEW FOR" + JSON.stringify(item));
    return res.render('footage/details.ejs',
        {
            title: "WP Primers",
            layout: "layout.ejs",
            estimatePartFootage: item
        });
});

// GET one
api.get('/edit/:id', function(req, res) {
    console.log("Handling GET /edit/:id " + req);
    var id = parseInt(req.params.id);
    var data = req.app.locals.estimatePartFootages.query;
    var item = find(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    console.log("RETURNING VIEW FOR" + JSON.stringify(item));
    return res.render('footage/edit.ejs',
        {
            title: "WP Primers",
            layout: "layout.ejs",
            estimatePartFootage: item
        });
});

// HANDLE EXECUTE DATA MODIFICATION REQUESTS --------------------------------------------

// POST new
api.post('/save', function(req, res) {
    console.log("Handling POST " + req);
    var data = req.app.locals.estimatePartFootages.query;
    var item = new Model;
    console.log("NEW ID " + req.body._id);
    item._id = parseInt(req.body._id);
	item.name = req.body.name;
    item.sqft = req.body.sqft;
    item.length = req.body.length;
    item.width = req.body.width;
    item.displayorder = parseInt(req.body.displayorder);
    data.push(item);
    console.log("SAVING NEW ITEM " + JSON.stringify(item));
    return res.redirect('/estimatePartFootage');
});

// POST update
api.post('/save/:id', function(req, res) {
    console.log("Handling SAVE request" + req);
    var id = parseInt(req.params.id);
    console.log("Handling SAVING ID=" + id);
    var data = req.app.locals.estimatePartFootages.query;
    var item = find(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    console.log("ORIGINAL VALUES " + JSON.stringify(item));
    console.log("UPDATED VALUES: " + JSON.stringify(req.body));
	item.name = req.body.name;
    item.sqft = req.body.sqft;
    item.length = req.body.length;
    item.width = req.body.width;
    item.displayorder = req.body.displayorder;
    console.log("SAVING UPDATED ITEM " + JSON.stringify(item));
    return res.redirect('/estimatePartFootage');
});

// DELETE id (uses HTML5 form method POST)
api.post('/delete/:id', function(req, res, next) {
    console.log("Handling DELETE request" + req);
    var id = parseInt(req.params.id);
    console.log("Handling REMOVING ID=" + id);
    var data = req.app.locals.estimatePartFootages.query;
    var item = remove(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    console.log("Deleted item " + JSON.stringify(item));
    return res.redirect('/estimatePartFootage');
});

module.exports = api;
// This model is managed by Team 4-4
// Sivareddy Mekapothula
// Amarishwer Edam
// Vikas Bavikadi