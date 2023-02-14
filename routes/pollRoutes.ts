import { Router } from "express";
import {
  getPoll,
  createPoll,
  voteOnPoll,
  createPollOption,
} from "../controllers/pollControllers";

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

/**
 * @description: Vote on a poll
 */
pollRoutes.post("/vote", (_req, _res) => {
  _res.send(voteOnPoll(_req, _res));
});

/**
 * @description: Create a new poll option
 */
pollRoutes.post("/option/create", (_req, _res) => {
  _res.send(createPollOption(_req, _res));
});
