// npm install bl
// http-collect - uses concat stream to collect all data from the server
	var concatStream = require('concat-stream');
	var http = require('http');
	
	var url = process.argv[2];

	http.get(url, function (response) {
		response.setEncoding('utf8');
		response.pip(concatStream(function (data) {
			console.log(data.length);
			console.log(data);
		}));
	});


