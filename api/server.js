import dotenv from "dotenv"
dotenv.config();

import express from "express"
import dbConnect from "./utils/dbConnect.js";
import userRouter from "./routes/userRouter.js";
import productRoutes from "./routes/productRoutes.js";
import reviewRouter from "./routes/reviewRoute.js";
import cartRouter from "./routes/cartRoutes.js";
const app = express();


//parsing the req body 
app.use(express.json());



app.use("/api/user",userRouter);
app.use("/api/product",productRoutes);
app.use("/api/reviews",reviewRouter);
app.use("/api/cart",cartRouter);








const port  = process.env.PORT || 8000;

app.listen(port ,async ()=>{
    try {
        await dbConnect();
    console.log(`server started on port `,port);
    } catch (error) {
        
        console.log(error.message);

    }
})


