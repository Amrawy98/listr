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

listRouter.post("", async (req, res, next) => {
  const { name, hostname, description } = req.body;
  try {
    console.log(name, hostname);
    const result = await List.create({ name, hostname, description });
    return res.json(result);
  } catch (err) {
    next(err);
  }
});

module.exports = listRouter;
