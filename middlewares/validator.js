const {body,validationResult}=require('express-validator')

const registerRules=()=>[
body('name','Name is required').notEmpty(),
body('lastName','Last Name is required').notEmpty(),
body('userName','User Name is required').notEmpty(),
body('email','Email is required').isEmail(),
body('password','Password must contain 6 characters').isLength(
    {
     min:6,
     max:20
    }
)
]

const loginRules=()=>[
    body('userName','User Name is required').notEmpty(),
    body('password','Password must contain 6 characters').isLength(
        {
         min:6,
         max:20
        }
    ) 
]

const validator=(req,res,next)=>{
const errors= validationResult(req)
if(!errors.isEmpty()){
    return res.status(400).send({errors:errors.array().map((el)=>( {msg :el.msg ,}))})
}
 next();

}

module.exports = {validator,registerRules,loginRules}