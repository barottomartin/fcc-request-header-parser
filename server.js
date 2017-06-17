var express = require('express');
var app = express();

app.get("/", function (request, response) {
  response.send("Hello")
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
