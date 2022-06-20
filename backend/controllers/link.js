const Link = require("../models/Link");
const linkRouter = require("express").Router();
const getMetadata = require("../utils/getMetadata");

// linkRouter.get("/", async (req, res) => {
//   const metaData = await getMetadata(req.query?.link);
//   return res.json(metaData);
// });

linkRouter.post("/", async (req, res, next) => {
  // get link and list an add to database
  const { link, list } = req.body;
  try {
    console.log(link, list);
    const result = await Link.create({ link, list });
    return res.json(result);
  } catch (error) {
    next(error);
  }
});

linkRouter.get("/:listId", async (req, res) => {
  try {
    const { ListId } = req.query;
  } catch (error) {
    next(error);
  }
  //get links for a certain list
});

module.exports = linkRouter;
