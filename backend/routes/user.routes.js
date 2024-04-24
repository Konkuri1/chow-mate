import { Router } from "express";
import { userVerfication } from "../middlewares/Auth.js";
import { SignUp,logIn,getUser,logOut } from "../controllers/user.controller.js";

//create main router
const router = Router();

//create other routes
router.post("/register", SignUp);
router.post("/login", logIn);
router.post("/logout", userVerfication, logOut);
router.get("/me", userVerfication, getUser);

//export router
export default router;