var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('about',{title:'Chubby Not Ugly',subject:'About Us'});
});

module.exports = router;
