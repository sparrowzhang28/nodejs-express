var createError = require('http-errors');
var express = require('express');
var path = require('path');
var parser = require('body-parser');
const session=require('express-session');
const RedisStore=require('connect-redis')(session);

// 定义路由组件
const listRouter=require('./routes/list')

var app = express();

// 设置引擎模板，否则报错
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// 解析参数
app.use(parser.json());
app.use(parser.urlencoded({ extended: false }));

// 可能的跨域解决方案
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});
//
// var cors = require('cors');
// app.use(cors());

const {redisServer} =require('./exec/execRedis')
const sessionStore=new RedisStore({
  client:redisServer
})
app.use(session({
  secret:'23@#RRRRdfg-+fgg',
  cookie:{
    httpOnly:true,
    path:'/',
    maxAge:20*1000   // 对应redis-key的过滤值 当超过此时间，redis中存储的内容会被清理
  },
  store:sessionStore
}))
// 定义路由 tip:这里的路径与路由组件中的组件组成完整路径  此处常见设置为 /api 等
app.use('/api',listRouter)


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

module.exports = app;
