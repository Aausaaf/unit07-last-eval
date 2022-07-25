const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    title:String,
    note:String,
    label:String,
     user:{
        type:mongoose.Types.ObjectId,
        ref:"User"
     }


},
{
    timestamps:true
})

const Post = mongoose.model('notes',postSchema)

module.exports = Post