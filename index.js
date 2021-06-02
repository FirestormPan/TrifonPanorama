var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var categoryRouter = require('./routes/categories'); 

//Gzip compressing can greatly decrease the size of the response body 
//var compression = require('compression')
//app.use(compression())

var app = express();

//translate globalizations multilingual
const i18next = require('i18next');
const i18nextMiddleware = require('i18next-express-middleware');
const Backend = require('i18next-node-fs-backend');

i18next
.use(i18nextMiddleware.LanguageDetector)
.use(Backend)
.init({
backend: {
loadPath: __dirname + '/locales/{{lng}}/{{ns}}.json'
},
debug: true,
detection: {
order: ['querystring', 'cookie'],
caches: ['cookie']
},
preload: ['gr'],
saveMissing: true,
fallBackLng: ['en']
});
app.use(i18nextMiddleware.handle(i18next));





// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/categories', categoryRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const port = process.env.PORT || 3000;

app.listen(port, function(){
  console.log("server working on port " + port)
});

module.exports = app;
