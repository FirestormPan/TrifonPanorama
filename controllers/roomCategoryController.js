
exports.room_info = function(req,res,next){
    var categoryName;
    var images=[];

   switch(req.params.categoryName){
       
    case "diamerismata":
        categoryName = "apartments";
        roomInformationTagForTranslation="Apartments_Info"
        images[0] ="../diamerismataPics/diamerismataBanner.jpg"
        for(i=1;i<8;i++){
            images[i] ="../diamerismataPics/diamerismataPic (" + i + ").jpg"
        }    

    break; 
    case "Ypogeia":
        categoryName ="basements";
        roomInformationTagForTranslation="Basements_Info"
        images[0] ="../YpogeiaPics/ypogeiaBanner.jpg"
        for(i=1;i<12;i++){
            images[i] ="../YpogeiaPics/ypogeiaPic (" + i + ").jpg"
        }

    break;
    case "Front_Sea_View":
        categoryName ="front_sea";
        roomInformationTagForTranslation="Front_Sea_View_Info"
        images[0] ="../mprostinh_8ea_8alassaPics/mprostinh_8ea_8alassaBanner.jpg"
        for(i=1;i<9;i++){
            images[i] ="../mprostinh_8ea_8alassaPics/mprostinh_8ea_8alassaPic (" + i + ").jpg"
        }
    break;
    case "Side_Sea_View":
        categoryName ="side_sea"
        roomInformationTagForTranslation="Side_Sea_View_Info"
        images[0] ="../plainh_8ea_8alassaPics/plainh_8ea_8alassaBanner.jpg"
        for(i=1;i<6;i++){
            images[i] ="../plainh_8ea_8alassaPics/plainh_8ea_8alassaPic (" + i + ").jpg"
        }
    break;

    
    default:
        res.status(404).send("category not found. try refreshing the page");
        return;
   }
     
    res.render('roomCategory_Info', {title: categoryName , information: roomInformationTagForTranslation , imagesCategory: images} );
};

