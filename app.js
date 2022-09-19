const express = require('express');
const router_user = require('./routes/user');
const router_user1 = require('./routes/user1');
const errorHandler = require('./utils/errorHandler');

const cors = require('cors');

const app = express();

app.use(cors({ origin: "*"}))

app.use(express.json());

app.use("/allAmounts", router_user);
app.use("/budgetAndSpent", router_user1);

app.use(errorHandler);

const PORT = 3001;

app.listen(PORT, () => {
    console.log(" server running on port " + PORT);
})