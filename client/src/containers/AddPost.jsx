import React from "react";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";
import { GET_POSTS } from "./Post";

const ADD_POST = gql`
    mutation createPostMutation($title: String, $text: String) {
        createPost(title: $title, text: $text) {
                id
                title
                text
            }
        }
`;

export const AddPost = () => {
    const [addPost, {data}] = useMutation(ADD_POST)

    const handleSubmit = (event) => {
        event.preventDefault();
        const {title, text} = event.target.elements;
        if (!title.value || !text.value) {
            return
        }
        addPost({
            variables: {title: title.value, text: text.value},
            refetchQueries: [{query: GET_POSTS}]
        })
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input type="text" name="title" placeholder="Title" />
            </div>
            <div>
                <textarea type="text" name="text" placeholder="Text" />
            </div>
            <button>Add Post</button>
        </form>
    );
};


