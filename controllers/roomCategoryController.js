
exports.room_info = function(req,res,next){
    var categoryName;
    var images=[];

   switch(req.params.categoryName){
    case "diamerismata":
        categoryName = "Διαμερίσματα";
        for(i=0;i<7;i++){
            images[i] ="../diamerismataPics/diamerismata (" + (i+1) + ").jpg"
        }    

    break; 
    case "Ypogeia":
        categoryName ="Ημιυπόγεια";
        for(i=0;i<23;i++){
            images[i] ="../YpogeiaPics/ypogeiapic (" + (i+1) + ").jpg"
        }

    break;
    case "Monoklina":
        categoryName ="Monoklina"
        images[0]="download.jpg";
        images[1]="potion.jpg";
        images[2]="GumboNapkins.png";
        images[3]="kanarini.jpg";
        images[4]="monok1.jpg";
    break;
    case "Triklina":
        images[0]="download.jpg";
        images[1]="potion.jpg";
        images[2]="GumboNapkins.png";
    break;
    default:
        res.status(404).send("category not found. try refreshing the page");
        return;
   }
     
    res.render('roomCategory_Info', {title: categoryName , information:'here is my info', imagesCategory: images} );
};

