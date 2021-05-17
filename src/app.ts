import express from "express";
import { config } from "dotenv";

class App {
  public app: express.Application = express();

  constructor() {
    config();

    this.middlewares();
  }

  private middlewares() {
    this.app.use(express.json({ limit: "50mb" }));
    this.app.use(
      express.urlencoded({
        parameterLimit: 100000,
        limit: "50mb",
        extended: false,
      })
    );
  }
}

export default new App().app;
