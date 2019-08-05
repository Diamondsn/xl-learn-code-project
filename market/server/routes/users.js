var express = require('express');
var router = express.Router();

var User=require('./../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//登陆接口
router.post('/login',function(req,res,next){
  var param ={
    userName: req.body.userName,
    userPwd: req.body.userPwd
  };
User.findOne(param,function(err,userdoc){
  if(err){
    req.json({
      status: '1',
      msg: err.message
    })
  }else{
   if(userdoc){
     //信息存入cookie
     res.cookie("userId",userdoc.userId,{
       path:'/',
       maxAge:1000*60*60
     })

     //存入session
     //res.session.user=doc;

     res.json({
       status: '0',
       msg:'',
       result: {
         userName:userdoc.userName
       }
     })
   }
  }
})
});

// 

module.exports = router;
