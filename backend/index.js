import express from "express";
import cors from "cors"
import mongoose from "mongoose";
<<<<<<< HEAD
import userRoutes from "./routes/user.routes.js"
import restaurantRoute from "./routes/restaurant.route.js"
import orderRoute from "./routes/order.routes.js"
import menuRoute from "./routes/menu.routes.js"
=======
import addUserRoute from "./routes/user.routes.js";
import restaurantRoute from "./routes/restaurant.route.js";
import orderRoute from "./routes/order.routes.js";
import menuRoute from "./routes/menu.routes.js";
>>>>>>> 453d637205f1d77f498e63d87720b10c1ecc3466

const PORT=process.env.PORT


//create express app
const app=express()


//use middlewares
app.use(cors())
app.use(express.json())


//use routes
app.use("/user",userRoutes)
app.use("/restaurant",restaurantRoute)
app.use("/order",orderRoute)
app.use("/menu",menuRoute)
//connect to mongoose
await mongoose.connect(process.env.MONGO_URI)


//start the sevrver
app.listen(PORT,()=>{
    console.log(`chow-mate is running on port: ${PORT}`)
})