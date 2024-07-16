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

router.put("/:id", hashPassword, edit);

router.post("/create", hashPassword, add);

router.get("/:id", read);

router.get("/verify/:name", verify);

router.get("/verify-email/:email", verifyEmail);

router.post("/verify-pseudo-or-email", verifyPseudoOrEmail);

module.exports = router;
