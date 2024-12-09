import { Router } from "express";
import { getRegister, handleRegister } from "./register.controller.js";

let registerRouter = Router()


registerRouter.get("/register", getRegister);
registerRouter.post("/handleRegister", handleRegister);

  
export default registerRouter