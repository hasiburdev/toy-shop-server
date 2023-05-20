require("dotenv").config();

const config = {
  DATABASE_URL: process.env.DATABASE_URL,
  DATABASE_NAME: process.env.DATABASE_NAME,
  PORT: process.env.PORT,
};

module.exports = config;
