const jwt = require('jsonwebtoken')
const { SCRET } = require("../../constant")
const User = require("../../database/users")



async function auth(req,res,next)
{
    let token = req.headers.token
    if(token)
    {
        try {
            const decode_user = jwt.verify(token,SCRET)
            const user=await User.findOne({
                email:decode_user.email
            })

            if(user)
            {
              req.context.user=user
            }
           
        } catch (error) {
            console.log(error)
            return res.status(400).send({
                error:"invalid token"
            })
            
        }
    }
  
    next()
}


module.exports=auth