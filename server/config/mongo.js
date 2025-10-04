import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

// Fix Mongoose deprecation warning
mongoose.set('strictQuery', false);

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/rocket-chat";

// Connect to MongoDB with better error handling
const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log("MongoDB connection error:", error.message);
    console.log("Please ensure MongoDB is running or use MongoDB Atlas");
    // Don't exit the process, let the server continue without DB for now
  }
};

mongoose.connection.on("connected", () => {
  console.log("MongoDB has connected successfully");
});
mongoose.connection.on("reconnected", () => {
  console.log("MongoDB has reconnected");
});
mongoose.connection.on("error", (error) => {
  console.log("MongoDB connection error:", error.message);
  // Don't disconnect, let the server continue
});
mongoose.connection.on("disconnected", () => {
  console.log("MongoDB connection is disconnected");
});

// Export the connection function
export default connectDB;
