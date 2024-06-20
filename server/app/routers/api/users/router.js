const express = require("express");

const router = express.Router();

const { add, edit, read } = require("../../../controllers/userActions");

router.put("/", edit);

router.post("/create", add);

router.get("/:id", read);

module.exports = router;
