const express = require("express");
const app = express();

app.use(function(req,res,next){
  console.log('Server Running....');
  next();
});

app.use(express.static("../client"));

app.listen(81,function(){
  console.log("serving at :81")
});
