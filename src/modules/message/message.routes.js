import { Router } from "express";
import { getMessages } from "./message.controller.js";

let messageRouter = Router()

messageRouter.get("/messages", getMessages);


export default messageRouter