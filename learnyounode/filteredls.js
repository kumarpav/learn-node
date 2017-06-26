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