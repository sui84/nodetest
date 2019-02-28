var express = require('express');
var app = express();
var fs = require("fs");
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
app.post('/addUser', function (req, res) {
	 console.log( req.body);
	  if(req.body){
		  
		  res.end( JSON.stringify(req.body));
	  }
	  else{
		  
		  res.end( JSON.stringify(user));
	  }
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port
  console.log("应用实例，访问地址为 http://%s:%s", host, port)

})