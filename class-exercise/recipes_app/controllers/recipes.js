const express = require('express');
const router = express.Router();

router.get('/',(req, res) =>{
    res.render('recipes/index',{})
});

router.post()
module.exports =router;