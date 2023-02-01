import { Router } from "express";
import { getPoll, createPoll } from "../controllers/pollControllers";

export const pollRoutes = Router();

/**
 * @description: Get a poll from the database
 */
pollRoutes.get("/get", (_req, _res) => {
  _res.send(getPoll(_req, _res));
});

/**
 * @description: Create a new poll
 */
pollRoutes.post("/create", (_req, _res) => {
  const obj = createPoll(_req, _res);
  _res.send(obj);
});
