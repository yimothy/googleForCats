const express = require('express');
const app = express();
const port = 3000;

var middleware = require('./config/middleware.js');

app.get('/', function(request, response) {
  response.sendfile('client/index.html');
});

middleware(app, express);

app.listen(port, function(err) {
  if(err) {
    return console.log('Error occurred: ', err);
  }
  console.log('Server is listening on port ', port);
})
