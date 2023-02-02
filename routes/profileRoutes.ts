import { Router } from "express";
import { getProfile, createProfile } from "../controllers/profileControllers";

export const profileRoutes = Router();

/**
 * @description: Get a profile from the database
 */
profileRoutes.get("/get", (_req, _res) => {
  _res.send(getProfile(_req, _res));
});

/**
 * @description: Create a new profile
 */
profileRoutes.post("/create", (_req, _res) => {
  const obj = createProfile(_req, _res);
  _res.send(obj);
});
