import { Router } from "express";
import { getPost, createPost } from "../controllers/postControllers";

export const postRoutes = Router();

/**
 * @description: Get a post from the database
 */
postRoutes.get("/get", (_req, _res) => {
  _res.send(getPost(_req, _res));
});

/**
 * @description: Create a new post
 */
postRoutes.post("/create", (_req, _res) => {
  const obj = createPost(_req, _res);
  _res.send(obj);
});
