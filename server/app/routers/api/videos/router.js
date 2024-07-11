const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions

const { browse } = require("../../../controllers/videoActions");
const { browseFree, read } = require("../../../controllers/videoActions");

// Route to get a list of videos

router.get("/", browse);
router.get("/free", browseFree);
router.get("/:id", read);

/* ************************************************************************* */

module.exports = router;
