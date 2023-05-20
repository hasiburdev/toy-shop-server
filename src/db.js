const { MongoClient } = require("mongodb");
const config = require("./config");

console.log(`Connecting to MongoDB`);
const client = new MongoClient(config.DATABASE_URL);

module.exports = client;
