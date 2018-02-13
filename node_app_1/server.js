var express = require('express')
var request = require ('request')
var app = express()
var morgan = require('morgan')
app.use(morgan('short'))


var port = 3010
var url2 = 'http://localhost:3020'

app.get('/',function(req,res){

	request(url2 , function(error,response,body){
		if(!error && response.statusCode ===200 ){
			

			if(body ==='23')
			{
			res.status(200)
			.send('All 3 servers up and running!')
			}

			else if (body ==='2'){
			res.status(200)
			.send('Server 1 and 2 running')
			}
			

		}
		else{
			res.status(200)
			.send('Only Server 1 running ')

		}
	})

	
})

app.listen(port , function(){
	console.log('Server 1 running on port',port)
})
