require('dotenv').config();
const DATABASE_URL = process.env.DATABASE_URL;

const mongoose = require('mongoose');

const connectWithDB = ()=>{
    mongoose.connect(DATABASE_URL)
    .then(
        console.log("DB Conected successfully")
    )
    .catch((error)=>{
        console.log('DB Facing Issue in connecting with server'),
        console.log(error),
        process.exit(1)
    }
    )
};

module.exports = connectWithDB;