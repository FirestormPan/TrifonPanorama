
exports.room_info = function(req,res,next){
   switch(req.params.categoryName){
    case "Diklina":
        //
        break;
    case "Monoklina":
        //
        break;
    case "Spiti oloklhro":
    //
     break;
    default:
        res.status(404).send("category not found. try refreshing the page");
        return;
   }
     
    res.render('roomCategory_Info', {categoryName: req.params.categoryName , information:'here is my info', imagePath:'../images/flame-knight.jpg'} );
};

