import express from "express";
import userRouter from "./user/user.router";
import instaRouter from "./insta-account/insta-account.router";
const router = express.Router();

router.use("/user", userRouter);
router.use("/insta", instaRouter);

export default router;
