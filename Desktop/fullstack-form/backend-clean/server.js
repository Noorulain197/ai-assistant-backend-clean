const express = require("express");
const cors = require("cors");
require("dotenv").config();
const messageRoutes = require("./routes/messageRoutes");



const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/message", messageRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
