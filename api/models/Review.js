import mongoose from "mongoose";
const reviewSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true

    },
    text: {
        type: String,
        required: true,
        trim: true,
        minlength: 10,
        maxlength: 500
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
    },
    createAt: {
        type: Date,
        default: Date.now
    }
})

//validate the review text
reviewSchema.path('text').validate((val) => {
    return val.length >= 10 && val.length <= 500;
}, 'Review must be between 10 and 500 characters');

//validate the rating
reviewSchema.path('rating').validate(function(rating){
    return rating>= 1 && rating<=5;
},'Rating must be between 1 and 5');

//create the compound index on product and user

reviewSchema.index({product:1,user:1},{unique:true});

const Review =    mongoose.model('Review',reviewSchema);

export default Review;

