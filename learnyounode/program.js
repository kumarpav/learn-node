// Learnyounode module

// Baby steps - accepts one or more numbers as comand-line argument and logs the sum of those numbers 

    /*logArray = process.argv;
    console.log(logArray.length);
    sum = 0;
    for (i = 2; i < logArray.length; i++) {
        //console.log(logArray[i]);
        sum += +logArray[i];
    }
    console.log(sum);*/

// My first i/o - wrute a proram that uses a single syncrhronous filesystem operation to read a file and print the number of 
// newlines it contains to the console

    /*var fs = require('fs')

    var text = fs.readFileSync(process.argv[2]);

    console.log(text.toString().split('\n').length - 1);*/

// My first aysnc i/o - same as above but doing it ayschronously, meaning using readfile()
// as well as idiomatic Node.js callbacks

    /*var fs = require('fs');

    fs.readFile(process.argv[2], 'utf8', function (err,data) {
        if (err) throw err;
        console.log(data.split('\n').length - 1);
    }*/

// Filtered LS - creates a program that prints a list of files in a given directory, filtered by the extension of the files
	/*var fs = require('fs');
	var path = require('path');

	fs.readdir(process.argv[2], function (err, list) {
		list.forEach(function (filename) {
			if (path.extname(filename) === '.'+ process.argv[3]) {
				console.log(filename);
			}
		});
	});*/

// Make it modular - create a module that uses callbacks, handles errors, and exports a single function
/*	var filterDir = require('.filter/-dir');

	var dirPath = process.argv[2],
	extension = process.argv[3];

	filterDir(dirpath, extension, function ( err, list) {
		if (err){ 
			console.log('An error happened when reading ' + dirPath);
			return err;
			}
		
		list.ForEach(function (filename) {
			console.log(filename);
		});
	});*/

// HTTP client = performs an http get requrst to a url provided as the first command-line argument
   /* var http = require('http');
    var url = process.argv[2];
    
    http.get(url, function(response) {
        response.setEncoding('utf8');

        response.on('data', function (data) {
            console.log(data);
        });
    });*/


// npm install bl
// http-collect - uses concat stream to collect all data from the server
/*	var concatStream = require('concat-stream');
	var http = require('http');
	
	var url = process.argv[2];

	http.get(url, function (response) {
		response.setEncoding('utf8');
		response.pip(concatStream(function (data) {
			console.log(data.length);
			console.log(data);
		}));
	});*/

// time-server : listens to tcp connecitons on the port providede by the first argument to the program
	var net = require('net');
 	var server = net.createServer(function (socket) {
		socket.end(getFormattedCurrentTime() + "\n");
	});

	server.listen(process.argv[2]);
	
	function getFormattedCurrentTime() {
		var now = new Date();

	return [now.getFullYear(), formatNumber(now.getMonth() + 1), formatNumber(now.getDate())].join("-")
		+ " " + [formatNumber(now.getHours()), formatNumber(now.getMinutes())].join(":");
	}

    function formatNumber(number) {
        return number < 10 ? "0" + number : number;
    }
