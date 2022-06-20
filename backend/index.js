const express = require("express");
require("dotenv").config();
const cors = require("cors");
const middleware = require("./utils/middleware");
const linkRouter = require("./controllers/link");
const listRouter = require("./controllers/list");
require("./DBConnect");

const app = express();
app.use(cors()); // cross origin access in front remove one both are on the same domain
app.use(express.json()); //parsing requests
app.use(middleware.requestLogger); //logging incoming requests
// routes
app.use("/api/link/", linkRouter);
app.use("/api/list/", listRouter);

app.use(middleware.unknownEndpoint); //unknown route
app.use(middleware.errorHandler); // error handling

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} ಠ_ಠ`);
});
