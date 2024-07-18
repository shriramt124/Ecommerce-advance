import express from "express"
import { addProductQuantity, addToCart, decreaseProductQuantity, getCart, removeProductFromCart } from "../controller/cartController.js";
import { isAuthenticated } from "../middlewares/authMiddleware.js";
const cartRouter = express.Router()
cartRouter.get("/getCart",isAuthenticated,getCart);
cartRouter.post("/add-product/:productId",isAuthenticated,addToCart);
cartRouter.patch('/increase-product-quantity/:productId',isAuthenticated,addProductQuantity);
cartRouter.patch('/decrease-product-quantity/:productId',isAuthenticated, decreaseProductQuantity);
cartRouter.delete('/remove-product/:productId',isAuthenticated, removeProductFromCart);
cartRouter.get("/getCart",isAuthenticated,getCart);

export default cartRouter;