// HTTP client = performs an http get requrst to a url provided as the first command-line argument
    var http = require('http');
    var url = process.argv[2];
    
    http.get(url, function(response) {
        response.setEncoding('utf8');

        response.on('data', function (data) {
            console.log(data);
        });
    });
