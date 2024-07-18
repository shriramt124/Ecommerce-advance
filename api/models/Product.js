import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate";

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        default: 1
    },
    imageSrc: {
        type: String,
    },
    category:{
      type:String,
      required:true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Review'
        }
    ]
},
{
    timestamps:true
})

 
productSchema.plugin(mongoosePaginate);

const Product =  mongoose.model('Product', productSchema);


export default Product;
