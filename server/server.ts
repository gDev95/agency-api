import * as express from "express";
import * as graphqlHTTP from "express-graphql";
import * as cors from "cors";

import schema from "./graphql/schema";
import { config } from "./config/env.config";
import connect from "./db";

const app = express();
const { port, environment } = config;

app.use(cors());
app.use(
	"/graphql",
	graphqlHTTP({
		// directing express-graphql to use this schema to map out the graph
		schema,
		// directing express-graphql to use graphiql when goto '/graphql' address in the browser
		// which provides an interface to make GraphQl queries
		graphiql: environment === "development" ? true : false
	})
);

app.listen(port, () =>
	console.log(`Server listening on port ${port} on ${environment}!`)
);
connect();
