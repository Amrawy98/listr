const mongoose = require("mongoose");
const listSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: [3, "Name's minimum length is 3."],
    unique: true,
  },
  root: {
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
});

listSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("List", listSchema);
