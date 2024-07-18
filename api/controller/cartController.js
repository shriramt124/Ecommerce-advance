import Cart from "../models/Cart.js";
import Product from "../models/Product.js";
import User from './../models/User.js';


export const addToCart = async (req, res) => {
     
    const productId = req.params.productId;
    const userId = req.user._id;

    try {
        // Find the product
        const product = await Product.findById(productId);
        if (!product) return res.status(400).json({ status: false, message: "Product not found" });

        // Find the user
        const user = await User.findById(userId);

        if (!user) {
            return res.status(400).json({
                status: false,
                message: "User not found"
            });
        }

        // Find the cart
        let cart = await Cart.findOne({ user: user._id });
        if (!cart) {
            cart = await Cart.create({ user: user });
            user.cart = cart;
            cart.user = user;
        }

        // Check if the product is already in the cart
        const existingProduct = cart.products.find((prodInCart) => prodInCart.product.toString() === productId);
        if (existingProduct) {
            // If the product is already in the cart, update the quantity
            existingProduct.quantity += 1;
        } else {
            // If the product is not in the cart, add it
            cart.products.push({
                product: productId,
                quantity: 1
            });
        }

 
        // Save the updated cart
        await cart.save();
        await user.save();


       return res.status(200).json({
            status: true,
            message: "Product added to cart successfully",
            data: cart
        })

    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message,
            stack: error.stack
        })
    }
}

export const getCart = async (req, res) => {
 
    const userId = req.user._id;
     
  
    try {
      // Find the cart for the user
      const cart = await Cart.findOne({ user: userId }).populate('products.product');
     
  
      if (!cart) {
      
        return res.status(404).json({
          status: false,
          message: "Cart not found"
        });
      }
      if(cart.user.toString()!==userId.toString()){
        return res.status(401).json({
            status: false,
            message: "You are not authorized to  access this cart"
        })
      }
      // Calculate the subtotal and total
      const subtotal = cart.products.reduce((acc, product) => acc + product.product.price * product.quantity, 0);
      const total = subtotal; // For now, assume no taxes or discounts
  
      res.json({
        status: true,
        cart: {
          products: cart.products,
          subtotal,
          total
        }
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        status: false,
        message: "Error retrieving cart"
      });
    }
  }

export const addProductQuantity = async (req, res) => {
    const userId = req.user._id;
    const productId = req.params.productId;
    try {
        // Find the cart for the user
        const cart = await Cart.findOne({ user: userId });

        if (!cart) {
            return res.status(404).json({
                status: false,
                message: "Cart not found"
            });
        }

        // Find the product in the cart
        const productInCart = cart.products.find((product) => product.product.toString() === productId);

        if (!productInCart) {
            return res.status(404).json({
                status: false,
                message: "Product not found in cart"
            });
        }

        // Update the quantity of the product
        productInCart.quantity++;

        // Save the updated cart
        // Recalculate the subtotal and total
        cart.subtotal = cart.products.reduce((acc, product) => acc + product.price * product.quantity, 0);
        cart.total = cart.subtotal; // For now, assume no taxes no discounts

        await cart.save();

        res.json({
            status: true,
            message: "Product updated in cart",
            data: productInCart
        });
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message,
            stack: error.stack
        });
    }
}

//decrease the quantity
// Decrease product quantity
export const decreaseProductQuantity = async (req, res) => {
    const userId = req.user._id;
    const productId = req.params.productId;


    try {
        // Find the cart for the user
        const cart = await Cart.findOne({ user: userId });

        if (!cart) {
            return res.status(404).json({
                status: false,
                message: "Cart not found"
            });
        }

        // Find the product in the cart
        const productInCart = cart.products.find((product) => product.product.toString() === productId);

        if (!productInCart) {
            return res.status(404).json({
                status: false,
                message: "Product not found in cart"
            });
        }

        // Check if the quantity is greater than or equal to the decrement value
        if (productInCart.quantity == 1) {
            return res.status(400).json({
                status: false,
                message: "Cannot decrease quantity below 0"
            });
        }

        // Decrease the quantity of the product
        productInCart.quantity -= 1;

        // Recalculate the subtotal and total
        cart.subtotal = cart.products.reduce((acc, product) => acc + product.price * product.quantity, 0);
        cart.total = cart.subtotal; // For now, assume no taxes no discounts

        // Save the updated cart
        await cart.save();

        res.json({
            status: true,
            message: "Product quantity decreased"
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: false,
            message: error.message,
            stack: error.stack
        });
    }
}



//delete the products on the cart
export const removeProductFromCart = async (req, res) => {
    const userId = req.user._id;
    const productId = req.params.productId;

    try {
        // Find the cart for the user
        const cart = await Cart.findOne({ user: userId });

        if (!cart) {
            return res.status(404).json({
                status: false,
                message: "Cart not found"
            });
        }

        // Find the product in the cart
     
        const index = cart.products.findIndex((product) => product._id.toString() === productId.toString());
      
        if (index === -1) {
            return res.status(404).json({
                status: false,
                message: "Product not found in cart"
            });
        }

        // Remove the product from the cart
        cart.products.splice(index, 1);

        // Save the updated cart
        await cart.save();

        res.json({
            status: true,
            message: "Product removed from cart"
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: false,
            message: "Error removing product from cart"
        });
    }
}