const {REDIS_CONF} =require('../config/db')

const redis=require('redis');

const redisServer=redis.createClient(REDIS_CONF.port,REDIS_CONF.host)

redisServer.on('error',()=>{
  console.log('redis连接错误')
})

module.exports={
  redisServer
}