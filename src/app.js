import express from 'express';
import 'dotenv/config';
import db from './prisma-client.js'
import usersRoute from './router/user-route.js'

const PORT = process.env.PORT;
const app = express();

app.use(express.json())

app.get('/', (req, res, next) => {
  return res.json({ message: 'HI' });
});

app.use('/users', usersRoute)

// GET /users
// app.get('/users', async (req, res, next) => {
//   //search user in db
//   const users = await db.user.findMany();
//   return res.json(users)
// });

// app.get('/users/:userID',async(req,res,next)=>{
//   const params = req.params;
//   const userID = params.userID;
//   const user = await db.user.findUnique({ where : {id:Number(userID)}});
//   if(!user){
//     return res.status(404).json({message:'USER NOT FOUND'})
//   }
//   res.json(user)
// });

// app.post('/users',async(req,res,next)=>{
//   const {email,name,password,confirmPassword,isAdmin=false} = req.body
//   if(!email || !name || !password || !confirmPassword){
//     return res.status(400).json({message:'All field required'})
//   }
//   if(password !== confirmPassword){
//     return res.status(400).json({message:'Password mismatch'})
//   }
//   if(!email.includes('@')){
//     return res.status(400).json({message:'Email Invalid'})
//   }
//   const existedUser = await db.user.findUnique({where:{email:email}})
//   if(existedUser){
//     return res.status(400).json({message:'Email is already used'})
//   }
//   const newUsers = await db.user.create({
//     data:{
//       email:email,
//       name:name,
//       password:password,
//       isAdmin :isAdmin,
//     }});
//   res.status(201).json(newUsers)
// });



app.listen(PORT, () => {
  console.log(`Serve running at ${PORT}`);
});
