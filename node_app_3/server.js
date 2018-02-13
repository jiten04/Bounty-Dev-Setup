var express = require('express')
var app = express()
var morgan = require('morgan')
app.use(morgan('short'))


var port = 3030

app.get('/',function(req,res){

	res.status(200)
	.send('Hello from server 3');
})

app.listen(port , function(){
	console.log('Server 3 running on port',port)
})
