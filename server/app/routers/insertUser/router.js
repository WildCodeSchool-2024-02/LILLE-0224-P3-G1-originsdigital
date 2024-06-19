const express = require("express");

const router = express.Router();

const { add } = require("../../controllers/insertUserController");

router.post("/", add);

module.exports = router;
