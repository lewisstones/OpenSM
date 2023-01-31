import app from "../index";
import { Router } from "express";
import { getPost } from "../controllers/postControllers";

export const postRoutes = Router();

postRoutes.get("/post", (_req, _res) => {
  _res.send(getPost(_req, _res));
});
