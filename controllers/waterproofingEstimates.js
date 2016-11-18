var express = require('express');
var api = express.Router();
var find = require('lodash.find');
var remove = require('lodash.remove');
var findIndex = require('lodash.findindex');
var Model = require('../models/waterproofingEstimate.js');
const notfoundstring = 'No such waterproofing estimates';
//Base:  api/waterproofingEstimate

// api.post('/save',function(req,res){

// res.send('dkd');
// });
// POST new
api.post('/save', function(req, res) {
    // console.log("Handling POST " + req);
    var data = req.app.locals.waterproofingEstimates.query;
    var item = new Model;
    // console.log("NEW ID " + req.body._id);
    // item._id = parseInt(req.body._id);
    // item.name = req.body.name;
    // item.unit = req.body.unit;
    // item.price = req.body.price;
    // item.displayorder = parseInt(req.body.displayorder);
    data.push(item);
    console.log("SAVING NEW ITEM " + JSON.stringify(item));
     res.redirect('/waterproofingEstimate');
});

//GET /api/waterproofingEstimate
api.get("/", function (request, response) {
  response.render("waterproofing/waterproofing.ejs");
});

api.get('/findall', function(req, res){
    res.setHeader('Content-Type', 'application/json');
    var data = req.app.locals.waterproofingEstimates.query;
    res.send(JSON.stringify(data));
});



api.get('/findone/:id', function(req, res){
     res.setHeader('Content-Type', 'application/json');
    var id = parseInt(req.params.id);
    var data = req.app.locals.waterproofingEstimates.query;
    var item = find(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    res.send(JSON.stringify(item));
});

// GET /api/waterproofingEstimate/{id}


//GET create 
api.get("/create", function (request, response) {
  response.render("waterproofing/create.ejs");
});

api.get('/delete/:id', function(req, res) {
    console.log("Handling GET /delete/:id " + req);
    var id = parseInt(req.params.id);
    var data = req.app.locals.waterproofingEstimates.query;
    var item = find(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    console.log("RETURNING VIEW FOR" + JSON.stringify(item));
    return res.render('waterproofing/delete.ejs',
        {
            title: "WP Primers",
            layout: "layout.ejs",
            waterproofingEstimate: item
        });
});

// GET /details/:id
api.get('/details/:id', function(req, res) {
    console.log("Handling GET /details/:id " + req);
    var id = parseInt(req.params.id);
    var data = req.app.locals.waterproofingEstimates.query;
    var item = find(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    console.log("RETURNING VIEW FOR" + JSON.stringify(item));
    return res.render('waterproofing/details.ejs',
        {
            title: "WP Primers",
            layout: "layout.ejs",
            waterproofingEstimate: item
        });
});


// GET one
api.get('/edit/:id', function(req, res) {
    console.log("Handling GET /edit/:id " + req);
    var id = parseInt(req.params.id);
    var data = req.app.locals.waterproofingEstimates.query;
    var item = find(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    console.log("RETURNING VIEW FOR" + JSON.stringify(item));
    return res.render('waterproofing/edit.ejs',
        {
            title: "WP Primers",
            layout: "layout.ejs",
            waterproofingEstimate: item
        });
});

//HANDLE EXECUTE DATA MODIFICATION REQUESTS --------------------------------------------



// POST update
api.post('/save/:id', function(req, res) {
    console.log("Handling SAVE request" + req);
    var id = parseInt(req.params.id);
    console.log("Handling SAVING ID=" + id);
    var data = req.app.locals.waterproofingEstimates.query;
    var item = find(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    console.log("ORIGINAL VALUES " + JSON.stringify(item));
    console.log("UPDATED VALUES: " + JSON.stringify(req.body));
    item.name = req.body.name;
    item.unit = req.body.unit;
    item.price = req.body.price;
    item.displayorder = req.body.displayorder;
    console.log("SAVING UPDATED ITEM " + JSON.stringify(item));
    return res.redirect('/waterproofing');
});



// DELETE id (uses HTML5 form method POST)
api.post('/delete/:id', function(req, res, next) {
    console.log("Handling DELETE request" + req);
    var id = parseInt(req.params.id);
    console.log("Handling REMOVING ID=" + id);
    var data = req.app.locals.waterproofingEstimates.query;
    var item = remove(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    console.log("Deleted item " + JSON.stringify(item));
    return res.redirect('/waterproofing');
});




module.exports = api;
// This model is managed by Team 4-03
// Sai Venkat Poorna Chandu Bhogireddy
// Santosh Ravi Teja Goteti