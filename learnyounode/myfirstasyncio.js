// My first aysnc i/o - same as above but doing it ayschronously, meaning using readfile()
// as well as idiomatic Node.js callbacks

    var fs = require('fs');

    fs.readFile(process.argv[2], 'utf8', function (err,data) {
        if (err) throw err;
        console.log(data.split('\n').length - 1);
    }