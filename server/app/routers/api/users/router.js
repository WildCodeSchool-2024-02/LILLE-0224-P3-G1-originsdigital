const express = require("express");

const router = express.Router();

const {
  add,
  edit,
  read,
  verify,
  verifyEmail,
} = require("../../../controllers/userActions");

router.put("/", edit);

router.post("/create", add);

router.get("/:id", read);

router.get("/verify/:name", verify);

router.get("/verify-email/:email", verifyEmail);

module.exports = router;
