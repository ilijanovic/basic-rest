import { Router } from "express";
import { getNameHandler } from "../controllers/name";
let router = Router();

router.get("/getName", getNameHandler);

export default router;
