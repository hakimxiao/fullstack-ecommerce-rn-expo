import { Router } from "express";
import {
  createProduct,
  getAllCustomers,
  getAllOrders,
  getAllProducts,
  getDashboardStats,
  updateOrderStatus,
  updateProduct,
  deleteProduct,
} from "../controllers/admin.controller.js";
import { adminOnly, protectRoutes } from "../middleware/auth.middleware.js";
import { upload } from "../middleware/multer.middleware.js";

const router = Router();

router.use(protectRoutes, adminOnly); // middleware - DRY (do not repeat yourself)

router.post("/products", upload.array("images", 3), createProduct);
router.get("/products", getAllProducts);
router.put("/products/:id", upload.array("images", 3), updateProduct);
router.delete("/products/:id", deleteProduct);

router.get("/orders", getAllOrders);
router.patch("/orders/:orderId/status", updateOrderStatus);

router.get("/customers", getAllCustomers);

router.get("/stats", getDashboardStats);

// PUT : untuk melakukkan uipdate pada semua kolom atau field
// PATCH : untuk melakukkan uipdate pada kolom atau field tertentu (lebih spesifik)

export default router;
