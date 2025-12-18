import { Router } from "express";
import {
  addAddress,
  addToWishlist,
  deleteAddress,
  getAddress,
  getWishlist,
  removeFromWishlist,
  updateAddress,
} from "../controllers/user.controller.js";
import { protectRoutes } from "../middleware/auth.middleware.js";

const router = Router();

router.use(protectRoutes);

// address route
router.post("/addresses", addAddress);
router.get("/addresses", getAddress);
router.put("/addresses/:addressId", updateAddress);
router.delete("/addresses/:addressId", deleteAddress);

// wishlist route
router.post("/wishlist", addToWishlist);
router.delete("/wishlist/:productId", removeFromWishlist);
router.get("/wishlist", getWishlist);

export default router;
