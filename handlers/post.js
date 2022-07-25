const Post = require('../database/post')
const Commnet = require("../database/comment")
async function getallpost(req,res,next)
{

    const {skip,limit} = req.query;
    const posts = await Post.find().skip(skip).limit(limit).populate('user')
    return res.send({
        data:posts
    })
}

async function getuserpost(req,res,next){
    const {id}   = req.params;
    const post = await Post.find({user:id});

    // const comment = await Commnet .find({
    //     post:{
    //         id:post._id
    //     }
    // })
    //post.comments = comments
    return res.send({
        data:post
    })
}

async function createPost (req,res,next){
  
 let post = req.body
 console.log(post)
 const {user} = req.context
 if(!user){
    return res.send({
        error:"login to crate the post"
    })
 }
post.user= user._id
  post = await Post.create(post)

 return res.send({
    data:post
 })

}
async function updataPost(req,res,next) {
    let {id} =  req.params
    let {post:postdata} = req.body

    let post = await Post.findById(id)

    for(const [key,value] of Object.entries(postdata)){
        post[key] = value
    }

    await post.save()

    return res.send({
        data:post
    })


}

async function deletepost(req,res,next)
{
    let {id} = req.params
//     const {user} = req.context
//     if(!user)
//     {
//         return res.status(400).send({
//             error:"Login to delete your post"
//         })
//     }

//     const post =   await Post.findById(id)
//    //
//    // console.log(id)
//   if(post.user.toString() !== user._id.toString())
//   {
//     console.log(post.user.toString())
//     console.log(user._id.toString())
//     return res.status(401).send({
//         error:"you can not delete"})
//   }
   await Post.findByIdAndDelete(id)
    return res.send({
        message : "Post hase been Delete"
    })
}

module.exports={
    getallpost,
    getuserpost,
    createPost,
    updataPost,
    deletepost
}