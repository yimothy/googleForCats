const express = require('express');
const app = express();
const port = 3000;

app.get('/', (request, response) => {
  response.sendfile('./client/index.html');
});

app.listen(port, (err) => {
  if(err) {
    return console.log('Error occurred: ', err);
  }
  console.log('Server is listening on port ', port);
})
