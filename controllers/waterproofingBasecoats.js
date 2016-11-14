var express = require('express');
var api = express.Router();
// see app.js for the root request this controller handles

// GET to this controller root URI
api.get("/", function (req, res) {
  return res.render('waterproofing_basecoats/index.ejs');
});

<<<<<<< HEAD
api.get("/details", function (req, res) {
  return res.render('waterproofing_basecoats/details.ejs');
});

api.get("/delete", function (req, res) {
  return res.render('waterproofing_basecoats/delete.ejs');
});

api.get("/edit", function (req, res) {
  return res.render('waterproofing_basecoats/edit.ejs');
});

api.get("/create", function (req, res) {
  return res.render('waterproofing_basecoats/create.ejs');
});



api.get('/findall', function(req, res){
    res.setHeader('Content-Type', 'application/json');
    var data = req.app.locals.waterproofingBasecoats.query;
    res.send(JSON.stringify(data));
});
=======
>>>>>>> 90c0f1484aaf4f9c508a6ee20204f2a0c8ca3f4b




module.exports = api;