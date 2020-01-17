import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { Post } from "../containers/Post";
import "./App.css";

const client = new ApolloClient({
    uri: "http://localhost:9000/graphql"
});

export const App = () => (
    <ApolloProvider client={client}>
        <Post />
    </ApolloProvider>
);


