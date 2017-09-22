     /*PACAGES*/
var path        = require('path');
var logger      = require('morgan');
var express     = require('express');
var hbs         = require('hbs');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var app         = express();
var port        = process.env.PORT || 3000;
var pirateController = require('./controllers/pirates.js');


app.use(methodOverride('_method'));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'hbs');
app.use("/pirates", pirateController);


app.get('/', function(req,res) {
    res.send('Pirates');
  });


    /*START SERVER*/
app.listen(port, function() {
  console.info('Server Up', port,"//", new Date());
});

