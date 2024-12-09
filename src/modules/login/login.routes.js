import { Router } from "express";
import { getLogin, handleLogin, handleLogout } from "./login.controller.js";

let loginRouter = Router()

loginRouter.get("/login", getLogin);
loginRouter.post("/handleLogin", handleLogin);
loginRouter.get("/logout", handleLogout);


export default loginRouter