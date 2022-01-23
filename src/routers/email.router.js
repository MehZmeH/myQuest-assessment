var express = require("express");
const router = express.Router();
const emailCont = require(`../controllers/email.validator.controller`);
const { ValidationRules, Validate } = require("../validators/custom.validators");

router.post(`/validate/batch`, ValidationRules(), Validate, emailCont.ValidateBatchEmails);
router.post(`/validate/single`);

module.exports = router;
