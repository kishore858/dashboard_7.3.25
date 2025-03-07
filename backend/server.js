require('dotenv').config({ path: './backend/.env' });
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

app.use("/api/admin", require("./routes/adminRoutes"));
app.use("/api/userdata", require("./routes/userRoutes"));

app.get("/", (req, res) => {
    res.send("API is running...");
  });
  

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
