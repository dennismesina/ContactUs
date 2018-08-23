var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

var db = mongoose.connect('mongodb://localhost/messages');

var Message = require('./models/messageModel');

var app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

messageRouter = require('./routes/messageRoutes')(Message);

app.use('/api/messages', messageRouter);

app.get('/', function (req, res) {
  res.send('Instructions here...');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});