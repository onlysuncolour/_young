/**
 * Module dependencies.
 */
"use strict"

let express = require('express'),
  favicon = require('serve-favicon'),
  http = require('http'),
  path = require('path'),
  logger = require('morgan'),
  cookieParser = require('cookie-parser'),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override'),
  errorhandler = require('errorhandler');
let routes = require('./routes/index'),
  login = require('./routes/login').router,
  comment = require('./routes/comment');

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
    // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Accept');
    res.setHeader('Vary',["Origin", "Accept-Encoding"]);
    res.setHeader('Transfer-Encoding',"chunked");
    // res.setHeader("Set-Cookie", ["token=112233445566"]);
    // res.setHeader('Vary',"");
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

let server = http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

let io = require('socket.io').listen(server);
io.on('connection', function (socket) {
  console.log("get connected");
  socket.emit('open', {test: true});//通知客户端已连接
  socket.on('otherEvent', (data) => {
    console.log(data);
  })
})
