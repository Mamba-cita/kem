import express from "express";
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.all("/auth", authUser);
router.all("/register", registerUser);
router.all("/logout", logoutUser);
router.route("/profile").get(protect ,getUserProfile).put(protect ,updateUserProfile);

export default router;
