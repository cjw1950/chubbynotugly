var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('about',{title:'Chubby Not Ugly',subject:'About Us',image:'./images/singleImage.jpg',text:'About Us I\'m all about motivating women who are like me chubbynotugly is only the beginning it\'s a movement !! Are you with me  An idea, a comment that hurt, a phrase to mask an insecurity ,turned into this I only want to receive and give positive vibes from this day forward -with love Alicia'});
});

module.exports = router;
