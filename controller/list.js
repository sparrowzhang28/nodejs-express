const {execSql} =require('../exec/execSql')

const getList=()=>{
  const sql='select * from list where 1=1'
  return execSql(sql)
}

module.exports={
  getList
}