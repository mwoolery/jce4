var express = require('express');
var api = express.Router();
var find = require('lodash.find');
var remove = require('lodash.remove');
var findIndex = require('lodash.findindex');
var Model = require('../models/roofingTopcoat.js');
const notfoundstring = 'No such roofing Topcoats';



// see app.js for the root request this controller handles

// GET to this controller root URI
api.get("/", function (request, response) {
  response.render("roofing_cost/index.ejs");
});

api.get('/create', function (request, response) {
    response.render("roofing_cost/create.ejs");
});
api.get('/findall', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    var data = req.app.locals.estimatePartRoofings.query;
    res.send(JSON.stringify(data));
});

api.get('/edit', function (request, response) {
    response.render("roofing_cost/edit.ejs");
});

//GET /delete/:id 
api.get('/delete/:id', function (req, res) {
    console.log("Handling GET /delete/:id " + req);
    var id = parseInt(req.params.id);
    var data = req.app.locals.estimatePartRoofings.query;
    var item = find(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    console.log("RETURNING VIEW FOR" + JSON.stringify(item));
    return res.render('roofing_cost/delete.ejs',
        {
            title: "RT",
            layout: "layout.ejs",
            estimatePartRoofing: item
        });
});

// GET /details/:id
api.get('/details/:id', function (req, res) {
    console.log("Handling GET /details/:id " + req);
    var id = parseInt(req.params.id);
    var data = req.app.locals.estimatePartRoofings.query;
    var item = find(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    console.log("RETURNING VIEW FOR" + JSON.stringify(item));
    return res.render('roofing_cost/details.ejs',
        {
            title: "RT",
            layout: "layout.ejs",
            estimatePartRoofing: item
        });
});

// GET one
api.get('/edit/:id', function (req, res) {
    console.log("Handling GET /edit/:id " + req);
    var id = parseInt(req.params.id);
    var data = req.app.locals.estimatePartRoofings.query;
    var item = find(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    console.log("RETURNING VIEW FOR" + JSON.stringify(item));
    return res.render('roofing_cost/edit.ejs',
        {
            title: "RT",
            layout: "layout.ejs",
            estimatePartRoofing: item
        });
});

api.post('/save', function (req, res) {
    console.log("Handling POST " + req);
    var data = req.app.locals.estimatePartRoofings.query;
    var item = new Model;
    console.log("NEW ID " + req.body._id);
    item._id = parseInt(req.body._id);
    item.name = req.body.name;
    item.unit = req.body.unit;
    item.price = req.body.price;
    item.displayorder = parseInt(req.body.displayorder);
    data.push(item);
    console.log("SAVING NEW ITEM " + JSON.stringify(item));
    return res.redirect('/estimatePartRoofing');
});

// POST update
api.post('/save/:id', function (req, res) {
    console.log("Handling SAVE request" + req);
    var id = parseInt(req.params.id);
    console.log("Handling SAVING ID=" + id);
    var data = req.app.locals.estimatePartRoofings.query;
    var item = find(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    console.log("ORIGINAL VALUES " + JSON.stringify(item));
    console.log("UPDATED VALUES: " + JSON.stringify(req.body));
    item.name = req.body.name;
    item.unit = req.body.unit;
    item.price = req.body.price;
    item.displayorder = req.body.displayorder;
    console.log("SAVING UPDATED ITEM " + JSON.stringify(item));
    return res.redirect('/estimatePartRoofing');
});

// DELETE id (uses HTML5 form method POST)
api.post('/delete/:id', function (req, res, next) {
    console.log("Handling DELETE request" + req);
    var id = parseInt(req.params.id);
    console.log("Handling REMOVING ID=" + id);
    var data = req.app.locals.estimatePartRoofings.query;
    var item = remove(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    console.log("Deleted item " + JSON.stringify(item));
    return res.redirect('/estimatePartRoofing');
});

module.exports = api;

// This was handled by Jaswant, Jonnalagadda