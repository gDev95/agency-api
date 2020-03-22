import { config } from "./env.config";

const { dbMasterKey, db } = config;

export const DB_URI = `mongodb+srv://admin:${dbMasterKey}@agencycluster1-nqyds.mongodb.net/${db}?retryWrites=true&w=majority`;
