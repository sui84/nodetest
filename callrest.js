var express = require('express');
var app = express();
var fs = require("fs");
var http = require("http");
var querystring = require('querystring');
var bodyParser = require("body-parser")


//添加的新用户数据
var user = {
   "user4" : {
      "name" : "mohit",
      "password" : "password4",
      "profession" : "teacher",
      "id": 4
   }
}
app.use(bodyParser.urlencoded({extended:true}))
app.post('/test', function (req, res) {
	console.log( req.body);
	
	var contents = querystring.stringify({
		name:'byvoid',
		email:'byvoid@byvoid.com',
		address:'Zijing'
	});
	
	var contents = querystring.stringify(req.body);
	
	// prepare the header
	var postheaders = {
		'Content-Type' : 'application/x-www-form-urlencoded',
		'Content-Length' : contents.length
	};

		
        // the post options
        var optionspost = {
            host : 'localhost',
            port : '8081',
            path : '/addUser',
            method : 'POST',
			headers : postheaders
        };
 
        // do the POST call


        // 服务器端发送REST请求
        var reqPost = http.request(optionspost, function(resPost) {
            resPost.on('data', function(d) {
                res.send(d);
            });
        });
 
		reqPost.write(contents);
        reqPost.end();
 
        reqPost.on('error', function(e) {
            console.error(e);
        });
		
		
       //res.end( JSON.stringify(user));

})

var server = app.listen(8082, function () {

  var host = server.address().address
  var port = server.address().port
  console.log("应用实例，访问地址为 http://%s:%s", host, port)

})


 

