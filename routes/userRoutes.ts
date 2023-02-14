import { Router } from "express";
import { getUser, createUser } from "../controllers/userControllers";

export const userRoutes = Router();

/**
 * @description: Get a user from the database
 */
userRoutes.get("/get", (_req, _res) => {
  _res.send(getUser(_req, _res));
});

/**
 * @description: Create a new user
 */
userRoutes.post("/create", (_req, _res) => {
  const obj = createUser(_req, _res);
  _res.send(obj);
});

/**
 * @description: Edit a user
 */
userRoutes.post("/edit", (_req, _res) => {
  _res.send("edit");
});
