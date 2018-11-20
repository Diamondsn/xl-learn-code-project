
/*
var http=require('http');//引入一个http模块
var fs=require("fs");//引入文件系统模块

var server=http.createServer(function(request,response){
    var html=fs.readFileSync("./index.html");//html是buffer的二进制流
    //console.log(html);
    response.end(html);//浏览器可读取二进制

});//创建服务器实例

server.listen("3000");//监听端口
*/

var express=require("express");
var app=express();

app.get('/',function(req,res){
    res.send("Hello World");
});

app.use(function(req,res,next){//next执行下一个中间件
    res.send("404");
});//全局中间件

app.listen(3000);