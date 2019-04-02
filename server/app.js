var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, '../')));

app.use('/static', express.static(path.join(__dirname, '../')));

app.get('/index.html',(req, res, next) => {
    res.send('ok');
});

app.listen(3000);