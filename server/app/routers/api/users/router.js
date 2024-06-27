const express = require("express");

const router = express.Router();

const {
  add,
  edit,
  read,
  verify,
  verifyEmail,
  verifyPseudoOrEmail,
} = require("../../../controllers/userActions");
const hashPassword = require("../../../services/hashPassword");

router.put("/:id", edit);

router.post("/create", hashPassword, add);

router.get("/:id", read);

router.get("/verify/:name", verify);

router.get("/verifyEmail/:email", verifyEmail);

router.post("/verifyPseudoOrEmail", verifyPseudoOrEmail);

module.exports = router;
