import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/big_edu_db");
    console.log("Connect mongodb successfully!!!");
  } catch (error) {
    console.log("Connect failure!!!");
  }
}
