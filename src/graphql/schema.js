import { gql } from "apollo-server-express";

export const typeDefs = gql`
    type Post {
        id: ID
        title: String
        text: String
    }
    type Query {
        post(id: ID): Post
        posts: [Post]
    }
    type Mutation {
        createPost(title: String, text: String): Post
        updatePost(id: ID, title: String, text: String): Boolean
        deletePost(id: ID!): Boolean
    }
`;


