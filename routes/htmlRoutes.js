// Require path for sending HTML
const path = require("path");

module.exports = function(app){ 

    // Route to send add/create page 
    app.get("/exercise",function (req,res){   
        res.sendFile(path.join(__dirname,"../public/exercise.html"));
    });

    // Route for home page
    app.get("/",function(req,res){    
        res.sendFile(path.join(__dirname,"../public/index.html"));
    });

    // Route for stats page
    app.get("/stats",function(req,res){   
        res.sendFile(path.join(__dirname,"../public/stats.html"));
    });
}