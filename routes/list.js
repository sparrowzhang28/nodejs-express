const express=require('express')
const router=express.Router();
const {Success,Error} =require('../model/resModel')
const {getList,insertNewData,updateItem,deleteItem} =require('../controller/list')

router.get('/',function(req,res){
  res.json('list-page')
})

router.get('/list',function(req,res){
   const promise=getList()
   promise.then((sqlData)=>{
    req.session.data = JSON.stringify(sqlData)
    res.json(new Success(sqlData))
   })
})

router.get('/redis-test', (req, res, next) => {
  if (req.session && req.session.data) {
      res.json(
          new Success({
              tip: 'redis返回',
              data:req.session.data
          })
      )
  } else {
    const promise=getList()
    promise.then((sqlData)=>{
     req.session.data = sqlData
     res.json(new Success({
      tip: '接口返回',
      data:sqlData
  }))
    })
  }
})

router.post('/list',function(req,res){
  const data={
    title:req.body.title,
    content:req.body.content
  }
  const promise=insertNewData(data)
  promise.then((sqlData)=>{
    res.json(new Success(sqlData))
  })
})

router.delete('/list',function(req,res){
  const promise=deleteItem(req.query.id)
  promise.then((sqlData)=>{
    res.json(new Success(sqlData))
  })
})

router.put('/list',function(req,res){
  const data={
    title:req.body.title,
    id:req.body.id
  }
  const promise=updateItem(data)
  console.log('req',req)
  promise.then((sqlData)=>{
    res.json(new Success(sqlData))
  })
})

module.exports= router