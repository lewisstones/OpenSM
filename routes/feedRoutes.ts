import { Router } from "express";
import { getHomeFeed, getPopularFeed } from "../controllers/feedControllers";

export const feedRoutes = Router();

/**
 * @description: Get a feed of posts for a given profile
 */
feedRoutes.get("/home", (_req, _res) => {
  _res.send(getHomeFeed(_req, _res));
});

/**
 * @description: Get a feed of popular posts
 */
feedRoutes.get("/popular", (_req, _res) => {
  _res.send(getPopularFeed(_req, _res));
});
