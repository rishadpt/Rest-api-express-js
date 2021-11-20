const express=require('express')
const Post=require('../models/post')
const router = express.Router()


// get all the posts
router.get('/',async (req,res)=>{
  try{
      const posts= await Post.find()
      res.json(posts)
  }catch(err){
      res.json({message:err})
  }

})

//get specific post
router.get('/:postId',async(req,res)=>{
    try{
  const post= await Post.findById(req.params.postId)
  res.json(post)}catch(err){
      res.json({message:err})
  }
 })
 
/// delete Post

router.delete('/:postId',async(req,res)=>{
    try{
        const post= await Post.remove({_id:req.params.postId})
        res.json({message:"post Deleted from db successfully"})
    }catch(err){
        res.json({message:err})
    }
})

///update a post 
router.patch('/:postId',async (req,res)=>{
    try{
      const updatePost=await Post.updateOne({_id:req.params.postId},{
          $set :{title : req.body.title}
        })
        res.json({message:"Post update successfully"})
    }catch(err){
        res.json({message:err})
    }
})

 //submit post
router.post('/',async (req,res)=>{

    const post = new Post({
        title: req.body.title,
        description: req.body.description
    }) 
try{
    const savePost=await post.save()
   res.json(savePost)
}catch(err){
    res.json({message:err})
}
   
})
module.exports = router 