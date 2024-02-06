import { Router } from "express";
import { checkout, verification } from "../controllers/payment";

const router = Router();

router.route("/checkout").post(checkout);
router.route("/verification").post(verification);

export default router;
