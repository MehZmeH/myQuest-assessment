var express = require("express");
const router = express.Router();

router.post(``, (req, res, next) => {
  res.json({ title: "myMan" });
});

module.exports = router;
