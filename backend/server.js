import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Connect MongoDB (only once)
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// ✅ Routes
app.use("/api/products", productRoutes);

// ✅ Test route (optional)
app.get("/", (req, res) => {
  res.send("Backend is live on Vercel 🚀");
});

// ❌ Remove app.listen() — Vercel doesn't use this
 app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// ✅ Export the app for Vercel serverless function
export default app;
