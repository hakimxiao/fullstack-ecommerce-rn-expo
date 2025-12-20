import { Router } from "express";
import { protectRoutes } from "../middleware/auth.middleware.js";
import {
  createReview,
  deleteReview,
} from "../controllers/review.controller.js";

const router = Router();

router.post("/", protectRoutes, createReview);
// we did not implement this function in the mobile app - in the frontend
// but just in case if you'd like to see the backend code here it is- i provided
router.delete("/:reviewId", protectRoutes, deleteReview);

export default router;
