var express = require('express');
var router = express.Router();

var mongoose=require("mongoose");
var Goods=require("../models/goods");

mongoose.connect('mongodb://127.0.0.1:27017/mydemo');

mongoose.connection.on("connected",function(){
  console.log("MongoDB connect sucess.");
});

mongoose.connection.on("error",function(){
  console.log("MongoDB connect fail.");
});

mongoose.connection.on("disconnected",function(){
  console.log("MongoDB connect disconnected.");
});

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.send("Hello goods");
  Goods.find({},function(err,doc){
    if(err){
      res.json({
        status:'1',
        msg:err.message
      })
    }else{
      res.json({
        status:'0',
        msg:'',
        result:{
          count:doc.length,
          list:doc
        }
      })
    }
  })
});

module.exports = router;