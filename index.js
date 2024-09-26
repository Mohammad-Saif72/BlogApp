require('dotenv').config();
// console.log(process.env.PORT);
const PORT = process.env.PORT||3000;

const express = require('express');
const app = express();

// middleware
app.use(express.json());

const blog = require('./routes/blog');
// mount 
app.use('/api/v1',blog);



// connection of database
const connectWithDB = require('./config/database');
connectWithDB();

app.get('/',(req,res)=>{
    res.send("<h1>This is home page</h1>")
})

app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT} `);
})

