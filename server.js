var express = require('express');
var app = express();

app.get("/", function (request, response) {
  var obj = {
    ipaddress: request.headers['x-forwarded-for'].split(',')[0],
    language: request.headers['accept-language'].split(',')[0],
    software: request.headers['user-agent'].split('(')[1].split(')')[0]
  }
  response.send(obj);
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});