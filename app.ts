/// <reference path="typings/node/node.d.ts" />
import * as Express from 'express';
import * as Path from 'path';
import * as Favicon from 'serve-favicon';
import * as Logger from 'morgan';
import * as CookieParser from 'cookie-parser';
import * as BodyParser from 'body-parser';
import * as Ect from 'ect';

import * as Routes from './routes/index';

var app = Express();

// view engine setup
var ectRenderer = Ect({ watch: true, root: __dirname + '/views', ext : '.ect' });
app.set('views', Path.join(__dirname, 'views'));
app.set('view engine', 'ect');
app.engine('ect', ectRenderer.render);

// uncomment after placing your favicon in /public
//app.use(favicon(Path.join(__dirname, 'public', 'favicon.ico')));
app.use(Logger('dev'));
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: false }));
app.use(CookieParser());
app.use(Express.static(Path.join(__dirname, 'public')));

app.use('/', Routes);

// catch 404 and forward to error handler
app.use((req: Express.Request, res: Express.Response, next: Function): void => {
  var err: any = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use((err: any, req: Express.Request, res: Express.Response, next: Function): void => {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use((err: any, req: Express.Request, res: Express.Response, next: Function): void => {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


export = app;
