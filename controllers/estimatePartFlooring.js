var express = require('express');
var api = express.Router();
var find = require('lodash.find');
var remove = require('lodash.remove');
var findIndex = require('lodash.findindex');
var Model = require('../models/estimatePartFlooring.js');
const notfoundstring = 'No such estimatePartFlooring ';


// See app.js to find default view folder (e.g.,"views")
// see app.js to find  default URI for this controller (e.g., "waterproofingPrimer")   
// Specify the handler for each required combination of URI and HTTP verb 
// HTML5 forms can only have GET and POST methods (use POST for DELETE)

// HANDLE JSON REQUESTS --------------------------------------------

api.get('/findall', function(req, res){
    res.setHeader('Content-Type', 'application/json');
    var data = req.app.locals.estimatePartFloorings.query;
    res.send(JSON.stringify(data));
});

api.get('/findone/:id', function(req, res){
     res.setHeader('Content-Type', 'application/json');
    var id = parseInt(req.params.id);
    var data = req.app.locals.estimatePartFloorings.query;
    var item = find(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    res.send(JSON.stringify(item));
});

// HANDLE VIEW DISPLAY REQUESTS --------------------------------------------

// GET all
api.get('/', function(req, res) {
    console.log("Handling GET " + req);
    return res.render('flooring_cost/index.ejs',
        { title: "EP Flooring", layout: "layout.ejs" });
});


// see app.js for the root request this controller handles

// GET to this controller root URI
api.get("/", function (request, response) {
response.render("flooring_cost/index.ejs");
});

// api.get("/create", function (request, response) {
// response.render("flooring_cost/create.ejs");
// });

// GET create
api.get("/create", function(req, res) {
    console.log('Handling GET /create' + req);
    res.render("flooring_cost/create.ejs",
        { title: "EP Flooring", layout: "layout.ejs" });
});

api.get("/delete", function (request, response) {
response.render("flooring_cost/delete.ejs");
});

api.get("/details", function (request, response) {
response.render("flooring_cost/details.ejs");
});

api.get("/edit", function (request, response) {
response.render("flooring_cost/edit.ejs");
});


module.exports = api;

/* 10 controller methods handled by controller:
	
   controllers/estimatePartFlooring.js  


2 Respond with JSON:


http://127.0.0.1:8081/estimatePartFlooring/findall       [WORKING]
http://127.0.0.1:8081/estimatePartFlooring/findone/1  [WORKING]


5 Respond with CRUD Views:


http://127.0.0.1:8081/estimatePartFlooring		   [WORKING]
http://127.0.0.1:8081/estimatePartFlooring/create     [WORKING]
http://127.0.0.1:8081/estimatePartFlooring/delete/1         [404]
http://127.0.0.1:8081/estimatePartFlooring/details/1	 [404]
http://127.0.0.1:8081/estimatePartFlooring/edit/1	        [404]


3 Respond by executing CRUD actions:


http://127.0.0.1:8081/estimatePartFlooring/save		[404]
http://127.0.0.1:8081/estimatePartFlooring/save/1 	[404]
http://127.0.0.1:8081/estimatePartFlooring/delete/1 	[404]


*/

// This controller is managed by Team 4-5
// Chaitanya Kiran Moturu
// Manikanteswara Rao Earla
// Sainath Gulla 
