var express = require('express');
var router = express.Router();

var mongoose = require("mongoose");
var Goods = require("../models/goods");

mongoose.connect('mongodb://127.0.0.1:27017/mydemo');

mongoose.connection.on("connected", function () {
  console.log("MongoDB connect sucess.");
});

mongoose.connection.on("error", function () {
  console.log("MongoDB connect fail.");
});

mongoose.connection.on("disconnected", function () {
  console.log("MongoDB connect disconnected.");
});

/* GET home page. */
router.get('/', function (req, res, next) {
  //res.send("Hello goods");

  var page=req.param("page");
  var pageSize=parseInt(req.param("pageSize"));
  var sort=req.param("sort");
  var level=req.param("level");

  var skip=(page-1)*pageSize;
  let startprice='';
  let endPrice='';
  var params = {};
  if(level!="all"){
 switch(level){
   case '0':startprice='0';endPrice='500';break;
   case '1':startprice='500';endPrice='1000';break;
   case '2':startprice='1000';endPrice='2000';break;
   default:startprice='0',endPrice='2000';
 }
 console.log(startprice);
 console.log(endPrice);
    params = {
      salePrice: {
        $gt: startprice,
        $lte: endPrice
      }
    }
  }

  let goodsModel=Goods.find(params).skip(skip).limit(pageSize);
  goodsModel.sort({'salePrice':sort});

  goodsModel.exec({}, function (err, doc) {
    if (err) {
      res.json({
        status: '1',
        msg: err.message
      })
    } else {
      res.json({
        status: '0',
        msg: '',
        result: {
          count: doc.length,
          list: doc
        }
      })
    }
  })
});

//加入购物车
router.post('/addCart',function(req, res, next){
   var userId='100000077';
   var productId=req.body.productId;
   var User=require('../models/user');
   
   User.findOne({userId:userId},function(err,userdoc){
   if(err){
     res.json({
       status:'1',
       msg:err.message
     })
   }else{
     console.log("userDoc:"+userdoc)
     if(userdoc){
       Goods.findOne({productId:productId},function(err1,doc){
        doc.productNum=1;
          doc.checked=1;
          userdoc.cartList.push(doc);
          userdoc.save(function(err2,doc2){
            if(err2){
              res.json({
                status:"1",
                msg:err2.message
              })
              }else{
                res.json({
                  status:'0',
                  msg:'',
                  result:'suc'
                })
              }
            })
          })
       }
    }
   })
   })

module.exports = router;