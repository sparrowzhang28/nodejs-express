const {MYSQL_CONF} =require('../config/db')

const mysql=require('mysql');

const conn=mysql.createConnection(MYSQL_CONF)

conn.on('error',()=>{
  console.log('数据库连接已断开，请重试')
})

const execSql=(sql)=>{
  const promise =new Promise((resolve,reject)=>{
    conn.query(sql,(err,data)=>{
      if(err){
        reject(err)
        return
      }
      resolve(data)
    })
  })
  return promise
}

module.exports={
  execSql
}