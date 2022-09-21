const express=require('express')
const router=express.Router();
const {Success,Error} =require('../model/resModel')
const {getList,insertNewData} =require('../controller/list')

router.get('/',function(req,res){
  res.json('list-page')
})

router.get('/list',function(req,res){
   const promise=getList()
   promise.then((sqlData)=>{
    res.json(new Success(sqlData))
   })
})

router.post('/list',function(req,res){
  const promise=insertNewData({
    title:'5',
    content:'5'
  })
  promise.then((sqlData)=>{
    res.json(new Success(sqlData))
  })
})



module.exports= router