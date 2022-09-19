const express = require("express");
const { getAllAmounts, deleteAmount ,addAmount } = require("../controller/user");

const router = express.Router();

router.route("/").get(getAllAmounts).delete(deleteAmount).post(addAmount)




module.exports = router;

