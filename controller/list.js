const {execSql} =require('../exec/execSql')

const getList=()=>{
  const sql='select * from list where 1=1'
  return execSql(sql)
}

const insertNewData=(data)=>{
  const sql=`insert into list(title,content) values('${data.title}','${data.content}')`
  return execSql(sql)
}

const updateItem=(data)=>{
  const sql=`update list set title='${data.title}' where id='${data.id}'`
  return execSql(sql)
}

const deleteItem=(id)=>{
  const sql=`delete from list where id='${id}'`
  return execSql(sql)
}

module.exports={
  getList,
  insertNewData,
  updateItem,
  deleteItem
}