const app = require("./app");
const config = require("./config");
const client = require("./db");

const main = async () => {
  await client.connect();
  console.log("Connected to MongoDB");
  app.listen(config.PORT, () => {
    console.log(`Server started on port: ${config.PORT}`);
  });
};

main();
