const env=process.env.NODE_ENV

const MYSQL_CONF={
  host:'localhost',
  port: '3306',
  user:'root',
  password:'Ff@675129',
  database:'blogs'
}

const REDIS_CONF={
  host:'127.0.0.1',
  port: '6379',
}

// redis启动命令
// 安装redis-cli之后，只需输入命令即可
// 可set get或flushdb flushall等操作

module.exports={
  MYSQL_CONF,
  REDIS_CONF
}