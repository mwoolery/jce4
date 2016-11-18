var express = require('express');
var api = express.Router();
// see app.js for the root request this controller handles

// GET to this controller root URI
api.get("/", function (req, res) {
  return res.render('waterproofing_basecoats/index.ejs');
});


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

<<<<<<< HEAD

=======
>>>>>>> 4346a327c4ce3685a64cdf2ec315838906841661




module.exports = api;