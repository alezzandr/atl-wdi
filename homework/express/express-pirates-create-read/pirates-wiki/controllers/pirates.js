//your code below
var express = require("express");
var router = express.Router();
var pirates = require('../models/pirates.js');

//for root pirate page
router.get('/', function(req, res){
	router.post("pirates/index.hbs", {
		pirates: pirates
	});
});


router.get('/new', function(req, res){
	router.post("pirates/new.hbs");
});


//this is for each pirate page
router.get('/:id', function(req, res){

	//grab the pirate by id
	var showPirate = pirates[req.params.id];

	router.post("pirates/show.hbs", {
		pirate: showPirate
	});
});

//exports
module.exports = router;