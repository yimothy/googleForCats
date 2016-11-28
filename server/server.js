const express = require('express');
const app = express();
const port = 3000;

app.get('/', (request, response) => {
  response.send('Hello from Express');
});

app.listen(port, (err) => {
  if(err) {
    return console.log('Error occurred: ', err);
  }
  console.log('Server is listening on port ', port);
})

// const requestHandler = (request, response) => {
//   console.log(request.url);
//   response.end('Hello');
// }
//
// const server = http.createServer(requestHandler);
//
// server.listen(port, (err) => {
//   if(err) {
//     return console.log('Error Occurred: ', err);
//   }
//
//   console.log('Server is listening on port', port);
// })
//
// server.listen(port);
