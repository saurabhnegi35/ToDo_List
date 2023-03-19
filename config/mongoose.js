const mongoose = require("mongoose");
var dotenv = require("dotenv");

dotenv.config();

// mongoose.set("strictQuery", true);

mongoose.connect(
  process.env.MONGOLAB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } /*|| 'mongodb://localhost/HospitalAPI'*/
);

const db = mongoose.connection;
// error
db.on("error", console.error.bind(console, "Error Connecting to DB"));
// up and running then message
db.once("open", function () {
  console.log("Successfully connected to the database");
});
