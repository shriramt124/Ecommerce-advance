import Product from "../models/Product.js";


//only admins can create products remember 
export const addProduct = async (req, res) => {
    const { title, description, price, quantity } = req.body;
    try {
        if (!title || !description || !price) {
            return res.status(400).json({ message: "Please fill all the fields" })
        }

        const product = await Product.create({
            title, description, price,

            quantity: quantity ?? 1

        });
        res.status(200).json({
            status: true,
            message: "Product added successfully",
            data: product
        })



    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message,
            stack: error.stack
        })
    }
}


//only admins can create products remember

//get all Products 

export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json({
            status: true,
            message: "Products fetched successfully",
            data: products
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message,
            stack: error.stack
        })
    }
}

//get the single Product

export const productDetails = async (req, res) => {
    const prodId = req.params.id;
    try {
        if (!prodId) {
            return res.status(400).json({
                status: false,
                message: "Product id is required"
            })
        }
        const product = await Product.findById(prodId);
        if (!product) {
            return res.status(404).json({
                status: false,
                message: "Product not found"
            })
        }
        res.status(200).json({
            status: true,
            message: "Product fetched successfully",
            data: product
        })

    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message,
            stack: error.stack
        })
    }
}

//update the product 
export const updateProduct = async (req, res) => {
    const prodId = req.params.id;
    const { title, description, price } = req.body;
    try {
        if (!title || !description || !price) {
            return res.status(400).json({
                status: false,
                message: "Product name, description and price are required"
            })
        }
        if (!prodId) {
            return res.status(400).json({
                status: false,
                message: "Product id is required"
            })
        }

        const product = await Product.findById(prodId);
        if (!product) {
            return res.status(404).json({

                status: false,
                message: "Product not found"
            })
        }
        const updatedProduct = await Product.findByIdAndUpdate(prodId, req.body, {
            new: true
        });
        res.status(200).json({
            status: true,
            message: "Product updated successfully",
            data: updatedProduct
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message,
            stack: error.stack
        })
    }
}


// delete the product
export const deleteProduct = async (req, res) => {
    const prodId = req.params.id;

    try {

        if (!prodId) {
            return res.status(400).json({
                status: false,
                message: "Product id is required"
            });
        }

        const deletedProduct = await Product.findByIdAndDelete(prodId);

        if (!deletedProduct) {
            return res.status(404).json({
                status: false,
                message: "Product not found"
            });
        }

        res.status(200).json({
            status: true,
            message: "Product deleted successfully"
        });
    } catch (error) {
        console.error(error); // log the error
        return res.status(500).json({
            status: false,
            message: "Internal Server Error"
        });
    }
}