var express = require('express')
var request = require ('request')
var app = express()
var morgan = require('morgan')
app.use(morgan('short'))


var port = 3020
var url3 = 'http://localhost:3030'

app.get('/',function(req,res){

	request(url3 , function(error,response,body){
		if(!error && response.statusCode ===200 ){
			
			res.status(200)
			.send('23')

		}
		else{
			res.status(200)
			.send('2')

		}
	})

	
})

app.listen(port , function(){
	console.log('Server 2 running on port',port)
})
