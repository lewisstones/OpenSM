import { Router } from "express";
import { getComment, createComment } from "../controllers/commentControllers";

export const commentRoutes = Router();

commentRoutes.get("/get", (_req, _res) => {
  _res.send(getComment(_req, _res));
});

commentRoutes.post("/create", (_req, _res) => {
  const obj = createComment(_req, _res);
  _res.send(obj);
});
