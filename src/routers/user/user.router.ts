import express from "express";
import { User } from "../../controllers";
const router = express.Router();

router.post("/", User.setUser);
router.get("/", User.getUser);
router.delete("/:userId", User.deleteUser);
router.put("/:userId", User.updateUser);

export default router;
