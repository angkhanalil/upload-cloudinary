const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const product = require("./routes/productRoutes");

// const products = require("./products");
const app = express();

require("dotenv").config();

app.use(express.json());
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cors());

app.use("/api/product", product);
app.get("/", (req, res) => {
  res.send("Welcome our to online shop API...");
});

app.post("/test", (req, res) => {
  console.log(req.body);
  res.status(200).json({ message: "test" });
});

const uri = process.env.DB_URL;
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port: ${port}...`);
});

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connection established..."))
  .catch((error) => console.error("MongoDB connection failed:", error.message));
