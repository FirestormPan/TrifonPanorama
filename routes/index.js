var express = require('express');
var router = express.Router();

const IndexContoller = require('../controllers/index_controller');

//translater
router.get('/', IndexContoller.list);

/*
router.get('/', function(req, res) {
  
  res.redirect('/?lng=gr');
});
*/

/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hotel Triphon Panorama' });
});
*/



module.exports = router;
