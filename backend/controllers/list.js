const List = require("../models/List");
const listRouter = require("express").Router();

listRouter.get("", async (req, res, next) => {
  const root = req.query.root;
  try {
    const newURL = new URL(root);
    const result = await List.find({ root: newURL.hostname });
    return res.json(result);
  } catch (err) {
    next(err);
  }
});

module.exports = listRouter;
