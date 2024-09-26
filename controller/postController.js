const Post = require('../models/postModel');

exports.createPost = async (req,res)=>{
    try {
        const {title,body} = req.body;

        const post = new Post({title,body});

        const savedPost = await post.save();

        res.json({
            post:savedPost,
        });

    } catch (error) {
        res.status(400).json({
            error:"Error while creating post",
        })
    }
};


// need some testing after completing like wala controller
exports.getAllpost = async (req,res)=>{
    try {
        const posts = await Post.find().populate('comment').exec();
        res.json({
            posts,
        })
    } catch (error) {
        res.status(400).json({
            error:"Error while fetching post",
        })
    }
}