require('dotenv').config();
var express = require('express');
var app = express();

app.use(express.static('public'));

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('hello');
});

app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en puerto', process.env.PORT);
});