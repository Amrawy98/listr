const express = require("express");
require("dotenv").config();
require("./DBConnect");

const List = require("./models/List");
const Link = require("./models/Link");

const app = express();

app.get("/:url", (req, res) => {
  res.send("Mammamiaaaa");
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} ಠ_ಠ`);
});
