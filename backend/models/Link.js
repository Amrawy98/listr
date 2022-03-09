const mongoose = require("mongoose");

// this was separated for the sake of preventing the array of links in a list to grow
// indefinitely and for any details to be added in the future ex. (caching)

const linkSchema = new mongoose.Schema({
  Link: {
    type: String,
    validate: {
      validator: (v) => {
        const urlRegExp =
          /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
        return urlRegExp.test(v);
      },
      message: (props) => "Invalid URL.",
    },
  },
  List: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "List",
  },
});

linkSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Link", linkSchema);
