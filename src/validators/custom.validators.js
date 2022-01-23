const { body, validationResult } = require("express-validator");

ValidationRules = () => {
  return [body("emails").isArray(), body("emails.*").isEmail()];
};

Validate = (req, res, next) => {
  const errors = validationResult(req);
  const extractedErrors = [];

  errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));

  res.locals.errors = errors.errors;

  next();
};

module.exports = {
  ValidationRules,
  Validate,
};
