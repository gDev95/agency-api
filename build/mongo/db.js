"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const db_config_1 = require("../config/db.config");
mongoose.connect(db_config_1.DB_URI, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.on("connected", () => {
    console.log("connected to db");
});
connection.on("disconnected", () => {
    console.log("disconnected from db");
});
connection.on("error", (error) => {
    console.log("db connection error", error);
});
process.on("SIGINT", () => {
    connection.close(() => {
        console.log("db connection closed due to process termination");
        process.exit(0);
    });
});
