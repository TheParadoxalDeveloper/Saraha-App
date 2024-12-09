import { model, Schema } from "mongoose";

let userSchema = new Schema({
  name: String,
  email: String,
  password: String
},{
    timestamps: false
});

export let User = model("User", userSchema);


