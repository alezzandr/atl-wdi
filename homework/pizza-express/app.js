// app.js
var express = require('express');
var app     = express();
var hbs = require('hbs');
var router = express.Router();
var port    = 3000;



app.set("view engine", "hbs");

app.set('views', './views');

app.get('/topping', function(req, res, next) {
    
        res.render( "Welcome to the Pizza Express!");
    });

app.get('/topping/:pepperoni', function(req, res, next) {
        
            res.render("pepperoni pizza! Good choice." );
        });    
app.get('/order/:10/:medium', function(req, res, next) {
            
             res.render("Your order for 10 medium pizzas will be ready in 1 minute!");
             });

    
var port    = 3000;

// tells the server to listen for requests on port 3000
app.listen(port, function(){
  console.log("==========================")
  console.log('LISTENING ON PORT ' + port);
  console.log("==========================")
});


