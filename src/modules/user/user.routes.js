import { Router } from "express";
import { getUser, sendMessage } from "./user.controller.js";

let userRouter = Router()


userRouter.get("/user/:id", getUser);
userRouter.post("/sendMessage/:id", sendMessage);

  
export default userRouter