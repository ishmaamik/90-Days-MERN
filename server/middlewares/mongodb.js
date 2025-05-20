import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

const MONGO_URI= process.env.MONGO_URI

export const mongodb=()=>{
    mongoose.connect(MONGO_URI)
    console.log("MongoDB connected")
}