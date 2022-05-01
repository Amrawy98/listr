const List = require("../models/List");
const listRouter = require("express").Router();

listRouter.get("", async (req, res) => {
  const root = req.query.root;
  const url = new URL(link);
  const result = await List.find({ root: url });

  return res.json(result);
});

module.exports = listRouter;
