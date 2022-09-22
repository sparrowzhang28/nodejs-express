# nodejs-express

## 依赖说明
"dependencies": {
    "body-parser": "^1.20.0",   // 解析参数
    "express": "~4.16.1",       // 服务器框架
    "http-errors": "~1.6.3",   // http错误模块
    "jade": "^1.11.0",         // 默认引擎渲染
    "mysql": "^2.18.1",        // sql模块
    "tslint": "^6.1.3"        // 非必须，规避编辑器报错
  },
  "devDependencies": {
    "cross-env": "^7.0.3",    //
    "nodemon": "^2.0.12"      // node的启动方式 类似于热更新及时响应
  },

## 项目说明
简单的node-express配合sql数据库，完成对前端数据接口的服务
配合前端项目https://github.com/sparrowzhang28/nodejsExpress_for_vue及本地数据库服务即可

## redis相关
redis启动命令：
 在cmd窗口执行  redis-server.exe
 新cmd窗口执行  .\redis-cli.exe -h 127.0.0.1 -p 6379  // 端口及IP可在配置文件中修改 但须与引用配置中的端口和IP一致
 退出执行redis  exit

