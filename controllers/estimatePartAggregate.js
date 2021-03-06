var express = require('express');
var api = express.Router();
var find =  require('lodash.find');
var remove = require('lodash.remove');
var findIndex = require('lodash.findIndex');
var Model = require('../models/estimatePartAggregate.js');
const notfoundstring = 'No such Estimate Part Aggregate';

// see app.js for the root request this controller handles
// see app.js to find  default URI for this controller (e.g., "estimatePartAggregate")
// Specify the handler for each required combination of URI and HTTP verb 
// HTML5 forms can only have GET and POST methods (use POST for DELETE)
/**
 * We need to have 5 methods ...
 */
api.get('/findall', function(req, res){
    res.setHeader('Content-Type', 'application/json');
    var data = req.app.locals.estimatePartAggregates.query;
    res.send(JSON.stringify(data));
});

api.get('/findone/:id', function(req, res){
     res.setHeader('Content-Type', 'application/json');
    var id = parseInt(req.params.id);
    var data = req.app.locals.estimatePartAggregates.query;
    var item = find(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    res.send(JSON.stringify(item));
});

// findall

//find all

api.get('/delete/:id', function (req, res) {
    console.log("Handling GET /delete/:id " + req);
    var id = parseInt(req.params.id);
    var data = req.app.locals.estimatePartAggregates.query;
    var item = find(data, { '_id': id });
    if (!item) {
         return res.end(notfoundstring);
     }
    console.log("Delete page --- Returning view for" + JSON.stringify(item));
    return res.render('aggregate_cost/delete.ejs',
        {
            title: "Aggregate Cost",
            layout: "layout.ejs",
            estimatePartAggregate :item
        });     
});


// GET create
api.get("/create", function(req, res) {
    console.log("---- create was called ---");
    console.log('Handling GET /create' + req);
    res.render("aggregate_cost/create.ejs",
        { title: "Aggregate Cost", layout: "layout.ejs" });
});

// //GET devare
// api.get('/devare/:id', function(req, res) {
//     console.log("Handling GET /devare/:id " + req);
//     var id = parseInt(req.params.id);
//     var data = req.app.locals.estimatePartAggregates.query;
//     var item = find(data, { '_id': id });
//     if (!item) { return res.end(notfoundstring); }
//     console.log("RETURNING VIEW FOR" + JSON.stringify(item));
//     return res.render('aggregate_cost/devare.ejs',
//         {
//             title: "Aggregate Cost",
//             layout: "layout.ejs",
//             waterproofingPrimer: item
//         });
// });


// GET /details/:id
api.get('/details/:id', function(req, res) {
    console.log("Handling GET /details/:id " + req);
    var id = parseInt(req.params.id);
    var data = req.app.locals.estimatePartAggregates.query;
    var item = find(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    console.log("RETURNING VIEW FOR" + JSON.stringify(item));
    return res.render('aggregate_cost/details.ejs',
        {
            title: "Aggregate Cost",
            layout: "layout.ejs",
            estimatePartAggregate: item
        });
});

// GET one
api.get('/edit/:id', function(req, res) {
    console.log("Handling GET /edit/:id " + req);
    var id = parseInt(req.params.id);
    var data = req.app.locals.estimatePartAggregates.query;
    var item = find(data, { '_id': id });
    console.log("----------");
    console.log("From edit: " + id);
    //console.log("Item was : " + item);
    if (!item) { 
        console.log('-- no item found ---');
        return res.end(notfoundstring); }
    else{        
    console.log("RETURNING VIEW FOR" + JSON.stringify(item));
    console.log((item._id));
    return res.render('aggregate_cost/edit.ejs',
        {
            title: "estimatePartAggregate",
            layout: "layout.ejs",
            estimatePartAggregate: item
        });
    }
});


// HANDLE EXECUTE DATA MODIFICATION REQUESTS --------------------------------------------

// POST new
/**
 * adding a new item
 */
api.post('/save', function(req, res) {
    console.log("Handling POST " + req);
    var data = req.app.locals.estimatePartAggregates.query;
    var item = new Model;
    console.log("NEW ID " + req.body._id);
    item._id = parseInt(req.body._id);

    var temp = "true";
    if(!req.body.isUsed || req.body.isUsed == null || req.body.isUsed == undefined){
        temp = false;
    }
    item.isUsed = temp;
    console.log("----- getting isUSed : after checkbox: " + req.body.isUsed);
    console.log("--- the temp was: --- " + temp);
    item.aggregateTypeSelection = req.body.aggregateTypeSelection;
    item.aggregateMaterialSelection = req.body.aggregateMaterialSelection;
    console.log("---------------------------");
    console.log(" the aggreate material sel. was: " + req.body.aggregateMaterialSelection);
    console.log("---------------------------");
    item.coverageSqFt = req.body.coverageSqFt;
    item.subtotal = req.body.subtotal;
    item.unitPrice = req.body.unitPrice;
    console.log("unit price was: " + req.body.unitPrice);
    item.unit = req.body.unit;
    console.log("unit was: " + req.body.unit);
    item.perSqft = req.body.perSqft;
    console.log("per sqft was: " + req.body.perSqft)
    data.push(item);
    console.log("SAVING NEW ITEM " + JSON.stringify(item));
    return res.redirect('/estimatePartAggregate');
});

// POST update
api.post('/save/:id', function(req, res) {
    console.log("Handling SAVE request" + req);
    var id = parseInt(req.params.id);
    id=parseInt(id);
    console.log("Handling SAVING ID=" + id);
    var data = req.app.locals.estimatePartAggregates.query;
    var item = find(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    //console.log("ORIGINAL VALUES " + JSON.stringify(item));
    console.log("UPDATED VALUES: " + JSON.stringify(req.body));
    console.log("--------------");
    console.log("id was: " + id);
    item._id = id;
    
    var isUsed = req.body.isUsed;
    if(isUsed=="on"){
        isUsed = true;
    }else{
        isUsed =false;
    }
    item.isUsed = isUsed;
    console.log("is used was: " + req.body.isUsed);
    item.aggregateTypeSelection = req.body.aggregateTypeSelection;
    console.log("---------------------------");
    console.log(" the aggreate type selection was: " + req.body.aggregateTypeSelection);
    console.log("---------------------------");
    item.aggregateMaterialSelection = req.body.aggregateMaterialSelection;
    item.coverageSqFt = req.body.coverageSqFt;
    item.subtotal = req.body.subtotal;
    item.unitPrice = req.body.unitPrice;
    console.log("unit price was: " + req.body.unitPrice);
    item.unit = req.body.unit;
    console.log("unit was: " + req.body.unit);
    item.perSqft = req.body.perSqft;
    console.log("---------------------------");
    console.log("per sqft was: " + req.body.perSqft)
    console.log("SAVING UPDATED ITEM " + JSON.stringify(item));
    return res.redirect('/estimatePartAggregate');
});

// DEvarE id (uses HTML5 form method POST)
api.post('/devare/:id', function(req, res, next) {
    console.log("Handling Devare request" + req);
});
// DELETE id (uses HTML5 form method POST)
api.post('/delete/:id', function(req, res, next) {
    console.log("Handling DELETE request" + req);
    var id = parseInt(req.params.id);
    console.log("Handling REMOVING ID=" + id);
    var data = req.app.locals.estimatePartAggregates.query;
    var item = remove(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    console.log("Deleted item " + JSON.stringify(item));
    return res.redirect('/estimatePartAggregate');
});

// see app.js for the root request this controller handles


// GET to this controller root URI
api.get("/", function (req, res) {
    console.log("--- index part was requestted ----");
     console.log("Handling GET " + req);
    return res.render('aggregate_cost/index.ejs',
        { title: "Estimate Parts", layout: "layout.ejs" });
});

module.exports = api;

/*GET

findall          Find all values

findall/:id           Find one value

/delete/:id          Delete this value

/create               Create New

/details/:id          Details this value

/edit/:id              Edit this value

data modification

/save                Save changes

/save/:id            Save this change

/delete/:id         Delete this value

get root uri        Get the index

/

*/


// This model is managed by Team R09
// Sandip Subedi
// Matthew Woolery
// Dhanalakota Neelesh Varma
