import app from "../index";
import { Router } from "express";
import { getPost, createPost } from "../controllers/postControllers";

export const postRoutes = Router();

postRoutes.get("/post", (_req, _res) => {
  _res.send(getPost(_req, _res));
});

postRoutes.post("/post", (_req, _res) => {
  const obj = createPost(_req, _res);
  _res.send(obj);
});
