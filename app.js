var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser");
    
   
    app.set("view engine", "ejs");
    
    app.get("/", function(req, res){
        res.render("gallery");
    })
    
    
    
    
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Image Gallery");
});

