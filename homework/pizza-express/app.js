// app.js

var express = require('express');

var app     = express();

var hbs = require('hbs');

var port    = 3000;

app.set("view engine", "hbs");

app.get(":amount/:size", (req, res) =>{
    const amount =parseInt(req.params.amount);
    const size = (req.params.amount);
res.render("/order", {
    amount: amount,
    size: size
});
});

app.set("view engine", "hbs");

app.set('views', './views');

app.get('/topping', function(req, res, next) {
    
        res.send( "Welcome to the Pizza Express!");
    });

app.get('/topping/:pepperoni', function(req, res, next) {
        
            res.send("pepperoni pizza! Good choice." );
        });    
app.get('/order/:10/:medium', function(req, res, next) {
            
             res.send("Your order for 10 medium pizzas will be ready in 1 minute!");
             });

    

app.listen(port, function(){
  console.log("==========================")
  console.log('LISTENING ON PORT ' + port);
  console.log("==========================")
});


