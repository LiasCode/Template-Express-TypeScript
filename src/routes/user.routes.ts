import { Router, Request, Response } from "express";

export const UserRouter = Router();

UserRouter.get("/", (req: Request, res: Response) => {
  res.send("User Api");
});
