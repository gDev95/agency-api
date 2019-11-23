import * as mongoose from "mongoose";
import { DB_URI } from "./config/db.config";

export default () => {
	mongoose.connect(DB_URI, { useNewUrlParser: true });

	const connection = mongoose.connection;

	connection.on("connected", () => {
		console.log("connected to db");
	});

	connection.on("disconnected", () => {
		console.log("disconnected from db");
	});

	connection.on("error", (error: any) => {
		console.log("db connection error", error);
	});

	process.on("SIGINT", () => {
		connection.close(() => {
			console.log("db connection closed due to process termination");
			process.exit(0);
		});
	});
};
