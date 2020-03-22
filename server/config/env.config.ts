import * as dotenv from "dotenv";

dotenv.config();

export const config = {
	db: process.env.DB,
	dbMasterKey: process.env.DB_PASSWORD,
	port: process.env.PORT,
	environment: process.env.NODE_ENV
};
