const express = require('express')
var app = express();
const port = process.env.PORT || 4000;
var cors = require('cors');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(cors())
app.use(bodyParser.json())

const routes = require('./routers/routes');
app.use('/api/v1', routes);



app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method, Access-Control-Request-Headers");
  res.header("Access-Control-Allow-Headers", "Content-Type, authorization");
  next();
});


app.listen(port, async () => {
  console.log(`Listening on port ${port}`);
});