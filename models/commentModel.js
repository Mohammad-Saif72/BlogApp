const mongoose = require('mongoose');

const commentModel = new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"post" // reference to the post model
    },
    
    user:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    }
})

// create a model
const comment = mongoose.model("comment",commentModel);
module.exports = comment;