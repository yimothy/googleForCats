var bodyParser = require('body-parser');
var path = require('path');

module.exports = function (app, express) {
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(express.static(path.join(__dirname, '/../../node_modules')));
  app.use(express.static(path.join(__dirname, '/../../client')));
  console.log('THIS IS THE FILE PATH DIRRRR', __dirname + '/../../client')
};
