import { Router, json } from "express";
import { UserRouter } from "./user.routes";
import path from "path";

const GlobalRouter = Router();

GlobalRouter.use(json());

GlobalRouter.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views/index.html"));
});

// ######## APIS ############
GlobalRouter.use("/api/user", UserRouter);

// ##########################

// ERROR 404
GlobalRouter.get("/error404", (req, res) => {
  res.send("error 404");
});

GlobalRouter.get("/*", (req, res) => {
  res.redirect("/error404");
});

export default GlobalRouter;
