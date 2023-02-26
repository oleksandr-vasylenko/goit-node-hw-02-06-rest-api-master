const { HttpError } = require("../helpers");

const validateBody = (schema) => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      throw next(HttpError(400, `missing field ${error.details[0].path}`));
    }
    next();
  };
  return func;
};

module.exports = validateBody;
