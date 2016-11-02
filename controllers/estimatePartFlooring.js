var express = require('express');
var api = express.Router();
var find = require('lodash.find');
var remove = require('lodash.remove');
var findIndex = require('lodash.findindex');
var Model = require('../models/estimatePartFlooring.js');
const notfoundstring = 'No such estimatePartFlooring ';



// see app.js for the root request this controller handles

// GET to this controller root URI
api.get("/", function (request, response) {
 response.render("flooring_cost/index.ejs");
});

api.get('/findall', function(req, res){
    res.setHeader('Content-Type', 'application/json');
    var data = req.app.locals.estimatePartFloorings.query;
    res.send(JSON.stringify(data));
});



module.exports = api;

// This controller is managed by Team 4-5
// Chaitanya Kiran Moturu
// Manikanteswara Ra Earla
// Sainath Gulla 