// app.js

//require express package
var express = require('express');
//save an express module as 'app'


var app     = express();
// assigning 3000 as our port

app.get('/topping', function(req, res, next) {
    
        res.send( "Welcome to the Pizza Express!");
    });

app.get('/topping/:pepperoni', function(req, res, next) {
        
            res.send("pepperoni pizza! Good choice." );
        });    
app.get('/order/:10/:medium', function(req, res, next) {
            
             res.send("Your order for 10 medium pizzas will be ready in 1 minute!");
             });

    //Make a GET route for /order that has 2 variable destinations (# of pizza, pizza size). 
    //When a user visits this route on localhost:3000/order/10/medium, they will see "Your order for 10 medium pizzas will be ready in 1 minute!" 
    //The syntax for the route will look like this:         
var port    = 3000;

// tells the server to listen for requests on port 3000
app.listen(port, function(){
  console.log("==========================")
  console.log('LISTENING ON PORT ' + port);
  console.log("==========================")
});

