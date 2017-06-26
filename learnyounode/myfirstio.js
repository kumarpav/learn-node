// My first i/o - wrute a proram that uses a single syncrhronous filesystem operation to read a file and print the number of 
// newlines it contains to the console

    var fs = require('fs')

    var text = fs.readFileSync(process.argv[2]);

    console.log(text.toString().split('\n').length - 1);