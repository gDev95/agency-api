import * as express from "express";
import * as graphqlHTTP from "express-graphql";
import * as cors from "cors";
import * as path from "path";

import schema from "./graphql/schema";
import connect from "./db";

const app = express();
const port = process.env.PORT || 9000;

app.use(cors());
app.use(
	"/graphql",
	graphqlHTTP({
		// directing express-graphql to use this schema to map out the graph
		schema,
		// directing express-graphql to use graphiql when goto '/graphql' address in the browser
		// which provides an interface to make GraphQl queries
		graphiql: true
	})
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
connect();
