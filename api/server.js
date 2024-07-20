import dotenv from "dotenv";
dotenv.config();
import rateLimit from "express-rate-limit"
import express from "express"
import dbConnect from "./utils/dbConnect.js";
import userRouter from "./routes/userRouter.js";
import productRoutes from "./routes/productRoutes.js";
import reviewRouter from "./routes/reviewRoute.js";
import cartRouter from "./routes/cartRoutes.js";
import cors from "cors";



const app = express();
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    delayMs: 0 // disable delaying - full speed until the max limit is reached
});

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

//parsing the req body 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(limiter);




app.use("/api/user", userRouter);
app.use("/api/product", productRoutes);
app.use("/api/reviews", reviewRouter);
app.use("/api/cart", cartRouter);








const port = process.env.PORT || 8000;

app.listen(port, async () => {
    try {
        await dbConnect();
        console.log(`server started on port `, port);
    } catch (error) {

        console.log(error.message);

    }
})


