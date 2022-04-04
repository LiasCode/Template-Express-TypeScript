import { Router, Request, Response } from "express";
import { UserRouter } from "./user.routes";
import path from "path";

const GlobalRouter = Router();

GlobalRouter.get("/", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "..", "views/index.html"));
});

// ######## APIS ############
GlobalRouter.use("/api/user", UserRouter);

// ##########################

// ERROR 404
GlobalRouter.get("/error404", (req: Request, res: Response) => {
  res.send("error 404");
});

GlobalRouter.get("/*", (req: Request, res: Response) => {
  res.redirect("/error404");
});

export default GlobalRouter;
