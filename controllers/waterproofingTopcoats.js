var express = require('express');
var api = express.Router();


// see app.js for the root request this controller handles

// GET to this controller root URI
api.get("/", function (req, res) {
  return res.render('waterproofing_topcoats/index.ejs');
});

<<<<<<< HEAD

=======
>>>>>>> 4346a327c4ce3685a64cdf2ec315838906841661
api.get("/delete", function (req, res) {
  return res.render('waterproofing_topcoats/delete.ejs');
});

api.get("/details", function (req, res) {
  return res.render('waterproofing_topcoats/details.ejs');
});

api.get("/edit", function (req, res) {
  return res.render('waterproofing_topcoats/edit.ejs');
});

api.get("/create", function (req, res) {
  return res.render('waterproofing_topcoats/create.ejs');
});

api.get('/findall', function(req, res){
    res.setHeader('Content-Type', 'application/json');
    var data = req.app.locals.waterproofingTopcoats.query;
    res.send(JSON.stringify(data));
});


module.exports = api;

// This model is managed by Team 4-14
//Mudduluru Saikrishna
//Malpani Sresth
//Govindu Madanamohan

<<<<<<< HEAD
module.exports = api;

=======
>>>>>>> 4346a327c4ce3685a64cdf2ec315838906841661
