








exports.room_info = function(req,res,next){
   //if(req.params.categoryName !== null) 
    res.render('roomCategory_Info', {categoryName: req.params.categoryName})
};
