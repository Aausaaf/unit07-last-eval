const express = require('express')

const cors = require('cors')
const userRoute = require('./Routes/user')
const postRoute = require('./Routes/post')
const connectDatebase = require('./database')

const app = express()

app.use(express.json())
app.use(cors())
app.use(setreqcontext)
app.use(logger)

app.use(userRoute)

app.use(postRoute)

function logger(req,res,next){

  console.log(new Date(),req.method,req.path)
    next()

}

function setreqcontext(req,res,next){
  req.context={

  }
  next()
}

connectDatebase().then(()=>{
    app.listen(3001, () => {
        console.log("serving at gytiur7ui 6r6");
      })
})

