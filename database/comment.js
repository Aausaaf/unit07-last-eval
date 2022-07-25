const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
   
    content:String,
    user:{
        type:mongoose.Types.ObjectId,
        ref:"User"
     },
     post:{
        title:String,
        id:mongoose.Types.ObjectId
     }


},
{
    timestamps:true
})

const Commnet = mongoose.model('comment',commentSchema)

module.exports = Commnet