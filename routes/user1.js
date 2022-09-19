const express = require("express");
const { getBudget, getSpent } = require("../controller/user");

const router = express.Router();

router.route("/").get(getBudget).post(getSpent)




module.exports = router;