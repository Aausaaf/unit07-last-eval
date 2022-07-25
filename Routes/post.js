const express = require('express')
const { getallpost, getuserpost, createPost, updataPost, deletepost } = require('../handlers/post')
const auth = require('./middileaware/auth')

const postRoute  = express.Router()

postRoute.get("/posts",getallpost)
postRoute.get("/posts/:id",getuserpost)
postRoute.post("/posts",auth,createPost)
postRoute.patch("/posts/:id",auth,updataPost)
postRoute.delete("/posts/:id",auth,deletepost)

module.exports= postRoute