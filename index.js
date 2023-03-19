const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const expressLayout = require("express-ejs-layouts");
app.use(expressLayout);
const db = require("./config/mongoose");

// it is use to handle middleware here we are using express.urlencoded to use the parser
app.use(express.urlencoded());
app.use("/", require("./routes"));
app.use(express.static("./assets")); // for getting static
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);
app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(port, function (err) {
  if (err) {
    console.log(`Error in Running the Server on Port ${port}`);
    return;
  }
  console.log(`Server running on Port: ${port}`);
});
