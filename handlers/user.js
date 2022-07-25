const User = require('../database/users')
const jwt = require('jsonwebtoken')
const {SCRET} = require("../constant/index")
async function register (req,res){
    const {user} = req.body
     let existuser = await User.findOne({
        email:user.email
     })

     if(existuser)
     {
        return res.status(400).send({
            error:"user already exist"
        })
     }
    let userDoc = await User.create(user);
     userDoc=userDoc.toJSON()
     delete userDoc.password
    return res.send({
        data:userDoc
    })
}

async function login(req,res)
{

    let {email,password} = req.body
    let user = await User.findOne({
        email:email
     })

     if(user)
     {
        if(user.password === password)
        {
           let encrypted_token = jwt.sign({
            id:user._id,
            email:user.email,
            name:user.name

        },SCRET)
        return res.send({
            data: {
                token:encrypted_token
            }
        })
        }
        else
        {
            return res.status(400).send({
                error:"password incorrect"
            })
        }
     }
     else{
        return res.status(400).send({
            error:"user is not found"
        })
     }
    
}

async function getloggedinuser(req,res,next)
{
    const {context} = req
    if(!context.user){
        return res.status(400).send({
            error:"no token"
        })
    }
    else{
        return res.send({
            data:context.user
        })
    }
}

async function getalluser (req,res,next){
    let users = await User.find()

    return res.send({
        data:users
    })
}
module.exports = {
    createUser:register,
    getalluser,
    login,
    getloggedinuser
}