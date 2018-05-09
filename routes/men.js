var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('men',{title:'Chubby Not Ugly',subject:'Men'});
});

module.exports = router;
