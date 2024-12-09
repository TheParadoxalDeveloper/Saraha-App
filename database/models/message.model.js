import { model, Schema } from "mongoose";

let messageSchema = new Schema({
  content: String,
  user: String,
},{
    timestamps: {
        createdAt: 'written_at',
    }
});

export let Message = model("Message", messageSchema);