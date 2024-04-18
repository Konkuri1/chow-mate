import Router from "express"
import { getRestaurants,addRestaurant } from "../controllers/restaurant.controller.js"

//create router
const router=Router()


//create other routes
router.get("/",getRestaurants)
router.post("/",addRestaurant)

//export router

export default router