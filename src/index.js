import express from "express";
import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "./graphql/schema";
import { resolvers } from "./graphql/resolvers";
import { config } from "./config/keys";
import mongoose from "mongoose";

(async () => {
    const app = express();
    await mongoose.connect(config.MONGO_URI, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("MongoDB Connected!"))
    .catch((err) => console.log(err));

    const server = new ApolloServer({ typeDefs, resolvers });
    server.applyMiddleware({ app });

    const port = process.env.PORT || 9000;
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
        console.log(`Press Ctrl + C to exit.`);
    })
})();


