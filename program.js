var express = require("express");
var fs = require("fs");
var app = express();

app.get('/books', function(req, res) {
    fs.readFile(process.argv[3], function(err, data) {
        if(err) {
            console.error("Error");
        }
        var jsonObj = JSON.parse(data.toString());
        res.json(jsonObj);
    });
});

app.listen(process.argv[2]);