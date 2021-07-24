const router = require('express').Router();
const User=require('../models/User')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const {validator,registerRules,loginRules}=require('../middlewares/validator')
const isAuth=require('../middlewares/isAuth')

     // Register new user
     // Public
 router.post('/register',registerRules(),validator, async (req, res) => {
    const { name, lastName,userName, email, password } = req.body;
    try {
      // Check for existing user
      let user = await User.findOne({ userName });
      if (user) {
        return res.status(400).json({ msg: 'User already exists' });
      }
      // Create new User
      user = new User({ name, lastName,userName, email, password });
       // Create Salt & hash
   const salt=10;
   const hashedPassword=await bcrypt.hash(password,salt);
   user.password=hashedPassword;
   
    // Save the user
   await user.save()
// sing user
const payload={
    id:user._id
}

const token = await jwt.sign(payload,process.env.secretOrKey,{expiresIn:'7 days',})

res.status(200).send({msg:'User registred with success',user,token})
}
catch(err){
res.status(500).send({msg:'Server Error'})
}
})  

// Login User
// Public
router.post('/login',loginRules(),validator, async (req, res) => {
const {userName,password}=req.body;
try{
// Check for existing user
let user=await User.findOne({userName})
if(!user){
 return res.status(400).json({msg:"Bad Credentials! UserName"})
}
//Check password
 const isMatch= await bcrypt.compare(password,user.password)
if(!isMatch){
 return res.status(400).json({msg:"Bad Credentials! password"}) 
}

// sing user
const payload={
    id:user._id
}

const token = await jwt.sign(payload,process.env.secretOrKey,{expiresIn:'7 days',});

res.send({msg:'Logged in with success',user,token})
}

catch(err){
    res.status(500).send({msg:'Server Error'})
}
})

// Get authentified user
// Private
router.get('/auth',isAuth,(req,res)=>{
    res.send({user:req.user})
})

module.exports = router;