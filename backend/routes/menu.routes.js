import Router from "express"
import { getMenu,createMenu,deleteMenu } from "../controllers/menu.controller.js"

const router=Router()

router.get("/",getMenu)
router.post("/",createMenu)
router.delete("/",deleteMenu)




export default router