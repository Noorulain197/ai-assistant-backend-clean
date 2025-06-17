const express = require("express");
const router = express.Router();
const { improveMessage } = require("../controllers/messageController");

router.post("/improve", improveMessage);

module.exports = router;
