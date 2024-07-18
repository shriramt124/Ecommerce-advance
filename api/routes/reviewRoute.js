import express  from 'express';
import { addReview, deleteReview, getAllReviews, updateReview } from '../controller/ReviewController.js';
import { isAuthenticated, isAuthorized } from '../middlewares/authMiddleware.js';
const reviewRouter = express.Router();
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


reviewRouter.post("/products/:id/addReview",isAuthenticated,isAuthorized(["member","admin"]),addReview);
reviewRouter.get("/products/:id/getReview",isAuthenticated,isAuthorized(["admin","member"]),getAllReviews);
reviewRouter.put("/products/:productId/updateReview/:reviewId",isAuthenticated,isAuthorized(["member","admin"]),updateReview);
reviewRouter.delete("/products/:productId/deleteReview/:reviewId",isAuthenticated,isAuthorized(["member","admin"]),deleteReview);

export default reviewRouter;