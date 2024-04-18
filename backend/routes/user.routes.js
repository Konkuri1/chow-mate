import { Router } from "express";
import { addUser } from "../controllers/user.controller.js";

//create express router
const router=Router()

//create other routes
router.post("/register",addUser)



//export router
export default router