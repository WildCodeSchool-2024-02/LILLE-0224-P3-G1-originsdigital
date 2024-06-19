const express = require("express");

const router = express.Router();

const { edit, read } = require("../../../controllers/updateAction");

router.put("/", edit);

router.get("/:id", read);

module.exports = router;
