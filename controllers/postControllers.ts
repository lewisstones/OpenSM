import { Request, Response, NextFunction } from "express";
import { basePost } from "../db/postTypes";
import { staticPost } from "../db/staticTypes";

export const getPost = (req: Request, res: Response): basePost => staticPost;
