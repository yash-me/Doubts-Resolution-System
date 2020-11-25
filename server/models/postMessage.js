import mongoose from 'mongoose';

const commentSchema = mongoose.Schema({
    text : String,
})

const postSchema = mongoose.Schema({
    email: String,
    name: String,
    title: String,
    description: String,
    answer: String,
    taName:String,
    likeCount: {
        type: Number,
        default: 0,
    },
    postTime: {
        type: Date,
        default: new Date(),
    },
    ansTime: {
        type: Date,
        default: new Date(),
    },
    comments: [commentSchema]
})

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;