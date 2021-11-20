const express=require('express')
const mongoose = require('mongoose')
const postsRoute = require('./routes/post')   //import routes
const cors= require('cors')
require('dotenv/config')
app = express()
app.use(express.json());
app.use(cors())

///connect to db
mongoose.connect(process.env.DB_CONNECT ,()=> console.log('connected to db'))

//middleware posts

app.use('/posts',postsRoute)


app.get('/',(req,res)=>{

    res.send('Hey welcome guys to Homepage')
})



app.listen(3000);