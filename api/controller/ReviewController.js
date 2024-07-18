import Product from "../models/Product.js";
import Review from "../models/Review.js";

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
export const addReview = async (req, res) => {
    //get the product id from req.params.id;

    const productId = req.params.id;
    const { rating, text } = req.body;
    const userId = req.user.id;
    try {
        if (!rating || !text) {
            return res.status(400).json({
                status: false,
                message: "Please add all the fields"
            })
        }
        //find the product on the basis of product id 
        const product = await Review.findById(productId);
        //check if the product exists
        if (!product) {
            return res.status(404).json({
                status: false,
                message: "Product not found"
            })
        }
        //check if the user has already reviewed the product
        const reviewAlreadyExists = await Review.findOne({
            product: productId,
            user: userId
        })

        if (reviewAlreadyExists) {
            return res.status(400).json({
                status: false,
                message: "You already reviewed this product"
            })
        }
        //add the review to the product
        const review = new Review({
            product: productId,
            user: userId,
            rating,
            text
        });
        //save the review
        await review.save();
        //save the reviews to the product
        product.reviews.push(review);
        await product.save();
        //send the response
        res.status(201).json({
            status: true,
            message: "Review added successfully",
            data: review
        })

    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message,
            stack: error.stack
        })
    }
}
//get all the product reviews
export const getAllReviews = async (req, res) => {
    //get the product id from the params
    const productId = req.params.productId;
    try {
        //check if the product exists
        if (!(await Product.exists({ _id: productId }))) {
            return res.status(404).json({
                status: false,
                message: "Product not found"
            })
        }
        //get all the reviews for the product
        const reviews = await Review.find({ product: productId })
            .populate('user')
            .populate("product");

        //send the response
        res.status(200).json({
            status: true,
            message: "Reviews fetched successfully",
            data: reviews
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message,
            stack: error.stack
        })
    }
}


//update the product reviews
export const updateReview = async (req, res) => {
    //get the review id  and product id from the params
    const reviewId = req.params.reviewId;
    const productId = req.params.productId;
    //get the review data from the body
    const reviewData = req.body;

    try {
        const review = await Review.exists({ _id: reviewId })
        //check if the review exists
        if (!(review)) {
            return res.status(404).json({
                status: false,
                message: "Review not found"
            })
        }
        //check if the user updating the review is same as the review's author 
        if (review.user.toString() !== req.user._id.toString()) {
            return res.status(403).json({
                status: false,
                message: "You are not authorized to update this review"
            })
        }
        //update the review with the new data
        review.rating = reviewData.rating;
        review.text = reviewData.text;

        await review.save();
        //send the response
        res.status(200).json({
            status: true,
            message: "Review updated successfully",
            data: review
        })



    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message,
            stack: error.stack
        })
    }
}

//delete the review
export const deleteReview = async (req, res) => {
    //get the review id  and product id from the params
    const reviewId = req.params.reviewId;
    const productId = req.params.productId;
    //check if the review exists
    try {
        const review = await Review.exists({ _id: reviewId })
        if (!(review)) {
            return res.status(404).json({
                status: false,
                message: "Review not found"
            })
        }
        //check if the user deleting the review is same as the review's author
        if (review.user.toString() !== req.user._id.toString()) {
            return res.status(403).json({
                status: false,
                message: "You are not authorized to delete this review"
            })
        }
        //delete the review
        await Review.findByIdAndDelete(reviewId);
        //send the response
        res.status(200).json({
            status: true,
            message: "Review deleted successfully"
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message,
            stack: error.stack
        })
    }
}

