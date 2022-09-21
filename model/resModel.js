class Base{
  constructor(data,message){
    this.data=data
    this.message=this.message
  }
}

class Success extends Base{
  constructor(data,message){
    super(data,message)
    this.status=200
  }
}

class Error extends Base{
  constructor(data,message){
    super(data,message)
    this.status=500
  }
}

module.exports={
  Error,
  Success
}