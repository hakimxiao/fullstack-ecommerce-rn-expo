import { Order } from "../models/order.model";
import { Product } from "../models/product.model.js";
import { Review } from "../models/review.model.js";

export async function createOrder(req, res) {
  try {
    const user = req.user;
    const { orderItems, shippingAddress, paymentResult, totalPrice } = req.body;

    if (!orderItems || orderItems.length === 0) {
      return res.status(400).json({ message: "No order items" });
    }

    // validate product and stock
    for (const item of orderItems) {
      const product = await Product.findById(item.product._id);
      if (!product) {
        return res
          .status(404)
          .json({ error: `Product ${item.name} not found` });
      }
      if (product.stock < item.quantity) {
        return res
          .status(400)
          .json({ error: `Insufficient stock for ${product.name} ` });
      }
    }

    const order = await Order.create({
      user: user._id,
      clerkId: user.clerkId,
      orderItems,
      shippingAddress,
      paymentResult,
      totalPrice,
    });

    // update product stock
    for (const item of orderItems) {
      await Product.findByIdAndUpdate(item.product._id, {
        // $inc is a increase like ++ | --
        $inc: {
          stock: -item.quantity,
        },
      });
    }

    res.status(201).json({ message: "Order created successfully", order });
  } catch (error) {
    console.error("Error createOrder controller:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function getUserOrders(req, res) {
  try {
    const orders = await Order.find({ clerkId: req.user.clerkId })
      .populate("orderItems.product")
      .sort({ createdAt: -1 }); // sort by createdAt in descending order

    // check if each order has been reviewed
    const orderWithReviewStatus = await Promise.all(
      orders.map(async (order) => {
        const review = await Review.findOne({ orderId: order._id });
        return {
          ...order.toObject(),
          hasReviewed: !!review, // double bang operator in js // = true jika ada isi false jika tidak atau undefined
        };
      })
    );

    res.status(200).json({ orders: orderWithReviewStatus });
  } catch (error) {
    console.error("Error getUserOrders controller:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
