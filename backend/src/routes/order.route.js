import { Router } from "express";
import { protectRoutes } from "../middleware/auth.middleware.js";
import { createOrder, getUserOrders } from "../controllers/order.controller.js";

const router = Router();

router.post("/", protectRoutes, createOrder);
router.get("/", protectRoutes, getUserOrders);

export default router;
