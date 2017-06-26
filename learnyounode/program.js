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
	var fs = require('fs');
	var path = require('path');

	fs.readdir(process.argv[2], function (err, list) {
		list.forEach(function (filename) {
			if (path.extname(filename) === '.'+ process.argv[3]) {
				console.log(filename);
			}
		});
	});
