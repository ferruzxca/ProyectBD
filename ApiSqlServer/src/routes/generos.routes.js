import { Router } from "express";
import {
  createGenero,
  deleteGenero,
  getGeneros,
  getGeenro,
  updateGenero,
  getGenero,
} from "../controllers/generos.controllers.js";

const router = Router();

router.get("/Generos", getGeneros);
router.get("/Generos/:id", getGenero);
router.post("/Generos", createGenero);
router.put("/Generos/:id", updateGenero);
router.delete("/Generos/:id", deleteGenero);

export default router;
