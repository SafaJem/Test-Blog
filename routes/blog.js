const router = require("express").Router();
//Require the User Schema
const User=require("../models/User")
//Require the blog Schema

const Blog = require("../models/Blog");
// Require Authentification middlewares

const isAuth =require('../middlewares/isAuth')

// Add blog
// acces private

router.post("/Addblog" ,isAuth, async (req, res) => {
    const {metaDescription,title,image,text,video} =req.body;
    try {
         const user = await User.findById(req.user._id).select("-password");
          const newBlog = {
          metaDescription,
          title,
          text,
          video,
          image, 
          nameUser:user.name,
          user:user._id
        };
        const blog = await new Blog(newBlog).save();
        res.json({ msg: "blog added", blog });
      } catch (error) {
          console.log(error)
        res.status(500).json("Server Error !");
      }
    });
    
  
  // Get blogs
  // acces public
  router.get("/", async (req, res) => {
    try {
      const blogs = await Blog.find();
      res.json({ msg: "All blogs", blogs });
    } catch (error) {
      console.log(error);
    }
  });

  // delete blog
  router.delete('/delete/:id',async(req,res)=>{
    const {id} =req.params
    try{
        const blog=await Blog.findOneAndDelete({_id:id})
        res.json({message:"blog deleted",blog})
    }
    catch(err){console.log(err)}

})


  module.exports = router;