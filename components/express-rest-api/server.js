const express = require("express");
const cors = require("cors");
const process = require("process");

const app = express();

var corsOptions = {
  origin: process.env.FRONTEND_URL
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
const retryMaxCount = 10;
const retryInterval = 5;
dbSyncWithRetry(retryMaxCount, retryInterval, db);
// simple to understand retry function for connecting to the database
function dbSyncWithRetry(maxRetries, sleepTime, db) {
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function handleError(err) {
    if (maxRetries <= 0) {
      throw err;
    }
    console.log(`Could not connect to database, waiting for ${sleepTime} seconds. ${maxRetries - 1} retries left`);
    await sleep(sleepTime * 1000); // Sleeps for 2 seconds

    return dbSyncWithRetry(maxRetries - 1, sleepTime, db);
  }

  return db.sequelize.sync().catch(handleError);
}
// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Bunnyshell - Getting Started app" });
});

require("./app/routes/bunnystart.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 3080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
