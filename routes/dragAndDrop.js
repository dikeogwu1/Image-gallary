const express = require("express");
const router = express.Router();
const authentication = require("../middleware/authentication");

const { dragAndDrop } = require("../controllers/dragAndDrop");

router.route("/").get(authentication, dragAndDrop);

module.exports = router;
