const express = require('express');
const router = express.Router();
const data = require('../models/pirates.js');

   
// }


router.get('/', (req,res) => {
    res.render('pirates/index',{
        pirates : data
    });
    
});

router.get('/new',(req,res) => {
    res.render('pirates/new')
});


router.post('/',(req,res) => {
    const newpirate = req.body;
    console.log(newpirate)
    data.push(newpirate);
    res.redirect('/pirates');
});

router.get('/:id',(req,res) => {
    const id = req.params.id;
    const pirates = data[id]
    if(!pirates){
        res.render('pirates/show',{
            error: "wrong page"
        })
    }else{
            res.render('pirates/show',{
                pirates : pirates
            })
    }    

});




module.exports = router;