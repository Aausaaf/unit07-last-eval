const mongoose = require('mongoose')

async function connectDatebase(){
    const dburi = "mongodb://localhost:27017/unitevalaution"
  try{
    await mongoose.connect(dburi)
    console.log("connected DataBase")
   
  }
  catch(err){
    console.log(err)
    throw err
  }
}

module.exports= connectDatebase