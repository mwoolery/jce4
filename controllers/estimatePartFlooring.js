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


// GET /delete/:id
api.get('/delete/:id', function(req, res) {
    console.log("Handling GET /delete/:id " + req);
    var id = parseInt(req.params.id);
    var data = req.app.locals.estimatePartFloorings.query;
    var item = find(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    console.log("RETURNING VIEW FOR" + JSON.stringify(item));
    return res.render('flooring_cost/delete.ejs',
        {
            title: "EP Flooring",
            layout: "layout.ejs",
            estimatePartFlooring: item
        });
});

api.post('/delete/:id', function(req, res) {
    console.log("Handling DELETE request" + req);
    var id = parseInt(req.params.id);
    console.log("Handling REMOVING ID=" + id);
    var data = req.app.locals.estimatePartFloorings.query;
    var item = remove(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    console.log("Deleted item " + JSON.stringify(item));
    return res.redirect('/estimatePartFlooring');
});

// GET /details/:id
api.get('/details/:id', function(req, res) {
    console.log("Handling GET /details/:id " + req);
    var id = parseInt(req.params.id);
    var data = req.app.locals.estimatePartFloorings.query;
    var item = find(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    console.log("RETURNING VIEW FOR" + JSON.stringify(item));
    return res.render('flooring_cost/details.ejs',
        {
            title: "EP Flooring",
            layout: "layout.ejs",
            estimatePartFlooring: item
        });
});

// GET one
api.get('/edit/:id', function(req, res) {
    console.log("Handling GET /edit/:id " + req);
    var id = parseInt(req.params.id);
    var data = req.app.locals.estimatePartFloorings.query;
    var item = find(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    console.log("RETURNING VIEW FOR" + JSON.stringify(item));
    return res.render('flooring_cost/edit.ejs',
        {
            title: "EP Flooring",
            layout: "layout.ejs",
            estimatePartFlooring: item
        });
});

// HANDLE EXECUTE DATA MODIFICATION REQUESTS --------------------------------------------

// adding a new one
api.post('/save', function(req, res) {
    console.log("Handling POST " + req);
    var data = req.app.locals.estimatePartFloorings.query;
    var item = new Model;
    console.log("NEW ID " + req.body._id);
    item._id = req.body._id;
    //var temp = "true";
    // if(!req.body.isUsed || req.body.isUsed == null || req.body.isUsed == undefined){
    //     temp = false;
    // }
    // item.isUsed = temp;
    
    item.floorSystemType = req.body.floorSystemType;
    item.usesUrethane = req.body.usesUrethane ? true: false;   
    item.urethaneProductSelection.name = req.body.urethaneProductSelection;
    // console.log("----------------");
    // console.log("urethaneProductSelection was: " + req.body.urethaneProductSelection);
    item.urethaneCoverageSqFt = req.body.urethaneCoverageSqFt;
    item.usesEpoxy = req.body.usesEpoxy ? true: false; 
    item.expoxyProductSelection.name = req.body.expoxyProductSelection;
    item.expoxyCoverageSqFt = req.body.expoxyCoverageSqFt;
    item.subtotal = req.body.subtotal;
    data.push(item);
    console.log("SAVING NEW ITEM " + JSON.stringify(item));
    return res.redirect('/estimatePartFlooring');
});

// POST update
/**
 * When we edit and save
 */
api.post('/save/:id', function(req, res) {
    console.log("Handling SAVE request" + req);
    var id = parseInt(req.params.id);
    console.log("Handling SAVING ID=" + id);
    var data = req.app.locals.estimatePartFloorings.query;
    var item = find(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    console.log("ORIGINAL VALUES " + JSON.stringify(item));
    console.log("UPDATED VALUES: " + JSON.stringify(req.body));
    item.floorSystemType = req.body.floorSystemType;
    item.usesUrethane = req.body.usesUrethane ? true: false;   
    item.urethaneProductSelection.name = req.body.urethaneProductSelection;
    item.urethaneCoverageSqFt = req.body.urethaneCoverageSqFt;
    item.usesEpoxy = req.body.usesEpoxy ? true: false; 
    item.expoxyProductSelection.name = req.body.expoxyProductSelection;
    item.expoxyCoverageSqFt = req.body.expoxyCoverageSqFt;
    item.subtotal = req.body.subtotal;
    console.log("SAVING UPDATED ITEM " + JSON.stringify(item));
    return res.redirect('/estimatePartFlooring');
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
http://127.0.0.1:8081/estimatePartFlooring/delete/1         [WORKING]
http://127.0.0.1:8081/estimatePartFlooring/details/1	 [WORKING]
http://127.0.0.1:8081/estimatePartFlooring/edit/1	        [WORKING]


3 Respond by executing CRUD actions:


http://127.0.0.1:8081/estimatePartFlooring/save		[WORKING]
http://127.0.0.1:8081/estimatePartFlooring/save/1 	[WORKING]
http://127.0.0.1:8081/estimatePartFlooring/delete/1 	[WORKING]


*/

// This controller is managed by Team 4-5
// Chaitanya Kiran Moturu
// Manikanteswara Rao Earla
// Sainath Gulla 
