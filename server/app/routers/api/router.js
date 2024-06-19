const express = require("express");

const router = express.Router();

const itemsRouter = require("./items/router");

router.use("/items", itemsRouter);

const MAJ = require("./updateUser/router");

router.use("/compte", MAJ)

const usertUser = require("../insertUser/router");

router.use("/insertUser", usertUser);


module.exports = router;
