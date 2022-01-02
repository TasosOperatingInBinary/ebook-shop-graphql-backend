const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const mongoose = require("mongoose");

const schema = require("./graphql/schema/schema");

const app = express();

mongoose.connect("mongodb://mongo:27017"); // TODO add database name after port number like /ebook-shop
mongoose.connection.once("open", () => {
  console.log("connected to database");

  app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true,
  }));  

  app.listen("8080", () => console.log("listening on port 8080"));
});