var express = require('express');
var router = express.Router();
const Ingredient = require('../models/ingredient') 
/* GET home page. */

router.get('/', function(req, res, next) {
  Ingredient.find({}, function(err, ingredients){
    res.send(ingredients);    
  })
});

module.exports = router;
