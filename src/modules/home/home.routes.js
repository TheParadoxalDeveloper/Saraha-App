import { Router } from "express";
import { getHome } from "./home.controller.js";

let homeRouter = Router()


homeRouter.get("/", getHome);

  
export default homeRouter