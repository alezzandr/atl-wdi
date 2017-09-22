/*PACAGES*/
const path = require('path');
const logger = require('morgan');
const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const  app = express();
const port = process.env.PORT || 3000;
const pirateController = require('./controllers/pirates.js');

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

