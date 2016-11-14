var express = require('express');
var api = express.Router();
var find = require('lodash.find');
var remove = require('lodash.remove');
var findIndex = require('lodash.findindex');
var Model = require('../models/waterproofingTopcoat.js');
const notfoundstring = 'No such waterproofing topcoat';


// see app.js for the root request this controller handles

// GET to this controller root URI
api.get("/", function (req, res) {
  return res.render('waterproofing_topcoats/index.ejs');
});

api.get("/delete", function (req, res) {
  return res.render('waterproofing_topcoats/delete.ejs');
});

api.get("/create", function (req, res) {
  return res.render('waterproofing_topcoats/create.ejs');
});


api.get("/details", function (req, res) {
  return res.render('waterproofing_topcoats/details.ejs');
});

api.get("/edit", function (req, res) {
  return res.render('waterproofing_topcoats/edit.ejs');
});

api.get('/findall', function(req, res){
    res.setHeader('Content-Type', 'application/json');
    var data = req.app.locals.waterproofingTopcoats.query;
    res.send(JSON.stringify(data));
});


module.exports = api;