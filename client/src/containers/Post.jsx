import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { AddPost } from "./AddPost";
import { UpdatePost } from "./UpdatePost";

export const GET_POSTS = gql`
    query getPosts {
        posts {
            id
            title
            text
        }
    }
`;

export const Post = () => {
    const { loading, error, data } = useQuery(GET_POSTS);
    if (loading) return "Loading...";
    if (error) return `Error! ${error.message}`

    return (
        <React.Fragment>
            <h1 className="banner">Post</h1>
            {data.posts.map((post) => (
                <main key={post.id}>
                    <h1>{post.title}</h1>
                    <p>{post.text}</p>
                </main>
            ))}
            <AddPost />
            <UpdatePost />
        </React.Fragment>
    );
};


