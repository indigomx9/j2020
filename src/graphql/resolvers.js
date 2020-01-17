import { Post } from "../models/Post";

export const resolvers = {
    Query: {
        post: (obj, {id}) => Post.findById(id),
        posts: () => Post.find(),
    },

    Mutation: {
        createPost: async (obj, {title, text}) => {
            const post = new Post({ title, text });
            await post.save()
            return post;
        },

        updatePost: async (obj, {id, title, text}) => {
            await Post.findByIdAndUpdate(id, {title, text});
            return true;
        },

        deletePost: async (obj, {id}) => {
            await Post.findByIdAndDelete(id);
            return true;
        },
    }
};


