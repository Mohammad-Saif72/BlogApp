// import models
const Post = require('../models/postModel');
const comment = require('../models/commentModel');


// busissness logics

exports.createComment = async (req,res)=>{
    try {
        // fetch data from the request body
        const {post,user,body} = req.body;

        // create a comment object

        const Comment = new comment({
            post,user,body
        });
        
         // save the new comment into the database
        const savedComment = await Comment.save(); 

       

        // find the post by id,add the new comments to its comment array
        const updatedPost = await Post.findByIdAndUpdate(
            post,  // Assuming 'post' refers to the post ID
            { $push: { comment: savedComment._id } },  // Add the new comment ID to the comments array
            { new: true }  // Return the updated document
        ).populate("comment") 
        .exec();

        res.json({
            post:updatedPost
        })
    } catch (error) {
          // Error handling
          res.status(500).json({
            success: false,
            message: "Error creating comment",
            error: error.message
        });
    }

    
}