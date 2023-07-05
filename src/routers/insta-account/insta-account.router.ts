import express from "express";
import { InstaAccount } from "../../controllers";
const router = express.Router();

router.post("/:userId", InstaAccount.setInstaAccount);
router.get("/:userId", InstaAccount.getInstaAccount);
router.delete("/:accountId", InstaAccount.deleteInstaAccount);
router.put("/:accountId", InstaAccount.updateInstaAccount);

export default router;
