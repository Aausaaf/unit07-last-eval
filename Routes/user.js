const express = require('express')
const { getalluser, login, createUser, getloggedinuser } = require('../handlers/user')
const auth = require('./middileaware/auth')

const userRoute = express.Router()
userRoute.get("/user",getalluser)
userRoute.post("/users",createUser)
userRoute.post("/user/login",login)
userRoute.get("/user/getloggedin",auth,getloggedinuser)
module.exports = userRoute