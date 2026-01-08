import { Router } from "express";
import { protectRoutes } from "../middleware/auth.middleware.js";
import { getAllProducts } from "../controllers/admin.controller.js";
import { getProductById } from "../controllers/product.controller.js";

const router = Router();

router.get("/", getAllProducts);
router.get("/:id", protectRoutes, getProductById);

export default router;

// MIDDLEWARE SY MATIKAN UNTUK MASLAH IPCONFIg
