import mongoose from "mongoose";

export const dbConnection = mongoose
  .connect("mongodb://127.0.0.1:27017/mvc_sarahaApp")
  .then(() => {
    console.log("Saraha Server Connected!");
  })
  .catch(() => {
    console.log("Error!! Saraha Server Not Connected!");
  });
