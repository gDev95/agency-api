"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const graphqlHTTP = require("express-graphql");
const cors = require("cors");
const schema_1 = require("./graphql/schema");
const db_1 = require("./db");
const app = express();
const port = 9000;
app.use(cors());
app.use("/graphql", graphqlHTTP({
    schema: schema_1.default,
    graphiql: true
}));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
db_1.default();
//# sourceMappingURL=server.js.map