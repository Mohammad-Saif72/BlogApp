const mongoose = require('mongoose');
const comment = require('./commentModel');

const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    likes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"like"
    }],
    comment:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"comment"
    }],
});

const post = mongoose.model("post",postSchema);
module.exports = post;







// const mongoose = require('mongoose');

// const postSchema = new mongoose.Schema({
//     title: {
//         type: String,
//         required: true
//     },
//     body: {
//         type: String,
//         required: true
//     },
//     likes: [{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "Like"  // Ensure this is the correct model name
//     }],
//     comments: [{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "Comment"  // Ensure this is the correct model name
//     }]
// })

// // create a model
// const post = mongoose.model("post",postSchema);
// module.exports = post;