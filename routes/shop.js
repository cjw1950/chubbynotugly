var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next){
  res.render('shop',{title:'Chubby Not Ugly',subject:'Shopping'});

});

module.exports = router;
