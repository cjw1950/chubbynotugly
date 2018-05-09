var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('lookbook',{title:'Chubby Not Ugly',subject:'Look Book'});
});

module.exports = router;
