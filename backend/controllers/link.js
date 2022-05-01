const linkRouter = require("express").Router();
const getMetadata = require("../utils/getMetadata");

linkRouter.get("/", async (req, res) => {
  const metaData = await getMetadata(req.query?.link);
  return res.json(metaData);
});

module.exports = linkRouter;
