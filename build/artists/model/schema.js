"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const schema = graphql_1.buildSchema(`
    type Query {
        artist(id: Int!): Artist
        artists(): [Artists]
    },
    type Artist {
        id: Int,
        name: String,
        hometown: String,

    }
`);
