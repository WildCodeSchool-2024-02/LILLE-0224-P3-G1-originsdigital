const express = require("express");

const router = express.Router();

const {
  add,
  edit,
  read,
  verify,
  verifyEmail,
} = require("../../../controllers/userActions");

router.put("/:id", edit);

router.post("/create", add);

router.get("/:id", read);

router.get("/verify/:name", verify);

router.get("/verifyEmail/:email", verifyEmail);

module.exports = router;
