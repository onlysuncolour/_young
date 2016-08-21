/**
 * Module dependencies.
 */

let express = require('express');
var routes = require('./routes/index');
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
app.set('port', process.env.PORT || 3000);
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(methodOverride());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

// development only
if ('development' == app.get('env')) {
  app.use(errorhandler());
}

app.get('/', routes);
// app.get('/comments', comment.list);
// app.get('/comments/:id', comment.get);
// app.delete('/comments/:id', comment.delete);
// app.post('/comments', comment.add);
// app.put('/comments/:id', comment.update);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
