import express from "express";
import { addProduct, deleteProduct, getAllProducts, productDetails, updateProduct } from "../controller/productController.js";
import { isAuthenticated, isAuthorized } from './../middlewares/authMiddleware.js';
const productRoutes = express.Router();
/* 
Add Product (POST /products) - Only admins can create products.
Get All Products (GET /products) - Both admins and members can access this route to view all the products available on the website.
Get Product Details (GET /products/:id) - Both admins and members can access this route to view the details of a specific product.
Update Product (PUT /products/:id) - Only admins can update the product details.
Delete Product (DELETE /products/:id) - Only admins can delete a product.
            Add Product Review (POST /products/:id/reviews) - Both admins and members can add product reviews.
 -->        Get Product Reviews (GET /products/:id/reviews) - Both admins and members can view product reviews.
            Update Product Review (PUT /products/:id/reviews/:reviewId) - Only the user who posted the review can update the review.
            Delete Product Review (DELETE /products/:id/reviews/:reviewId) - Only the user who posted the review can delete the review.
*/

//add the review
productRoutes.post("/addProducts",isAuthenticated,isAuthorized(["admin"]),addProduct);
productRoutes.get("/getAllProducts",isAuthenticated,getAllProducts);
productRoutes.get("/productDetail/:id",isAuthenticated,isAuthorized(["admin","member"]),productDetails);
productRoutes.put("/updateProduct/:id",isAuthenticated,isAuthorized(["amdin"]),updateProduct);
productRoutes.delete("/deleteProduct/:id",isAuthenticated,isAuthorized(["admin"]),deleteProduct);





export default productRoutes;