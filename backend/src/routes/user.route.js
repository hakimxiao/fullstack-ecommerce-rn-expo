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
router.post("/whislist", addToWishlist);
router.delete("/whislist/:productId", removeFromWishlist);
router.get("/whislist", getWishlist);

export default router;
