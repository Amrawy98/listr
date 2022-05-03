const morgan = require("morgan");

//logging requests
morgan.token("body", function (req) {
  const ret = JSON.stringify(req.body);
  return ret === "{}" ? " " : ret;
});
const requestLogger = morgan(
  ":method :url :status :res[content-length] - :response-time ms :body"
);

// handling errors
const errorHandler = (error, request, response, next) => {
  console.error(error.name);

  if (error.name === "CastError") {
    return response.status(400).send({ error: "malformatted id" });
  } else if (error.name === "ValidationError") {
    return response.status(400).json({ error: error.message });
  } else if (error.name === "TypeError") {
    return response.status(400).json({ error: "malformatted input" });
  }

  next(error);
};

// unknown endpoint
const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};

module.exports = {
  requestLogger,
  unknownEndpoint,
  errorHandler,
};
