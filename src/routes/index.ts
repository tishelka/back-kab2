import express from "express";
import userRoutes from "./userRoutes";
import itemRoutes from "./itemRoutes";

const router = express.Router();

router.use("/users", userRoutes);
router.use("/items", itemRoutes);

export default router;
