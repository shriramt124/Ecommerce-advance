import mongoose from 'ongoose';
import nodemailer from 'nodemailer';
import Cart from './models/Cart.js';

const abandonedCartReminder = async () => {
  // Set the time threshold for abandoned carts (e.g., 24 hours)
  const abandonedThreshold = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

  // Find carts that have been abandoned for more than the threshold time
  const abandonedCarts = await Cart.find({
    updatedAt: { $lt: Date.now() - abandonedThreshold },
    products: { $ne: [] }, // Ensure the cart is not empty
  });

  // Loop through each abandoned cart and send a reminder email
  abandonedCarts.forEach(async (cart) => {
    const user = await mongoose.model('User').findById(cart.user);
    const products = cart.products;

    // Create a nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: 'mtp.example.com',
      port: 587,
      secure: false, // or 'STARTTLS'
      auth: {
        user: 'your-email@example.com',
        pass: 'your-email-password',
      },
    });

    // Create a mail options object
    const mailOptions = {
      from: 'your-email@example.com',
      to: user.email,
      subject: 'Don\'t miss out! Complete your purchase',
      text: `Hi ${user.name}, don't forget to complete your purchase!`,
      html: `<p>Hi ${user.name}, don't forget to complete your purchase!</p>`,
    };

    // Add products to the email body
    products.forEach((product) => {
      mailOptions.text += `\n - ${product.product.name} x ${product.quantity}`;
      mailOptions.html += `<p> - ${product.product.name} x ${product.quantity}</p>`;
    });

    // Send the email
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`Email sent to ${user.email}`);
      }
    });
  });
};

// Run the script every hour using node-cron
import cron from 'node-cron';
cron.schedule('0 * * * *', abandonedCartReminder);