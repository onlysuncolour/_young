/**
 * Module dependencies.
 */
"use strict"
let express = require('express');
var routes = require('./routes/index');
var login = require('./routes/login').router;
var comment = require('./routes/comment');
let favicon = require('serve-favicon');
let http = require('http');
let path = require('path');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
let methodOverride = require('method-override')
let errorhandler = require('errorhandler')

let app = express();

// all environments
app.set('port', process.env.PORT || 8083);

// app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(methodOverride());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Add headers
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});

app.use('/', routes);

app.use('/login', login);

// development only
if ('development' == app.get('env')) {
  app.use(errorhandler());
}

// app.get('/', routes);
// app.post('/', routes);
// // app.get('/login', login);
// app.post('/login', login);

// app.get('/comments', comment.list);
// app.get('/comments/:id', comment.get);
// app.delete('/comments/:id', comment.delete);
// app.post('/comments', comment.add);
// app.put('/comments/:id', comment.update);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
