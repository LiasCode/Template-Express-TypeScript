import express from "express";
import path from "path";
import morgan from "morgan";
import cors from "cors";

import GlobalRouter from "./routes";

const App = express();

// Settings
App.set("port", 3000);

// Middlewares
App.use(morgan("dev"));
App.use(cors());
App.use(express.json());
App.use(express.urlencoded({ extended: false }));

// Public static files
App.use(express.static(path.join(__dirname, "..", "public")));

// Routes
App.use(GlobalRouter);

export default App;
