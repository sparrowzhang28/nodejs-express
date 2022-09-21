const {execSql} =require('../exec/execSql')

const getList=()=>{
  const sql='select * from list where 1=1'
  return execSql(sql)
}

const insertNewData=(data)=>{
  const sql=`insert into list(title,content) values('${data.title}','${data.content}')`
  return execSql(sql)
}

module.exports={
  getList,
  insertNewData
}