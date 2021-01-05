var express = require('express');
var router = express.Router();

var room_controler = require('../controllers/roomCategoryController'); 

router.get('/', function(req,res,next){
    res.send('aaaama pxoia!', {elamou:"dfs"});
     
 });

router.get('/:categoryName', room_controler.room_info);

module.exports = router;