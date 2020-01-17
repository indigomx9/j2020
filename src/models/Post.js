import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    title: { type: String },
    text: { type: String },
    comments: { type: Array },
});

export const Post = mongoose.model("Post", PostSchema);


