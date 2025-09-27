import { Router } from "express";
import { index, show, store } from "../controllers";


const router = Router();

router.get("/api/apartments", index);
router.get("/api/apartments/:id", show);
router.post("/api/apartments", store);


export default router;
