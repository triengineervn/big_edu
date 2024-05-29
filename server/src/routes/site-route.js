import express from "express";
import SiteController from "../controllers/site-controller.js";
const router = express.Router();

router.get("/", SiteController.home);

export default router;
