import React from "react";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";
import { GET_POSTS } from "./Post";

const UPDATE_POST = gql`
    mutation updatePostMutation($id: ID, $title: String, $text:String) {
        updatePost(id: $id, title: $title, text: $text) {
            id
            title
            text
        }
    }
`;

export const UpdatePost = () => {
    const [updatePost, {data}] = useMutation(UPDATE_POST)

    const handleSubmit = (event) => {
        event.preventDefault();
        const {title, text} = event.target.elements;
        if (!title.value || !text.value) {
            return
        }
        updatePost({
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
            <button>Update</button>
        </form>
    );
};


