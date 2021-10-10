import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { Request, Response } from "express";
import ControllerInitializer from "./controller.initializer";
const compression = require('compression')


function shouldCompress (req:Request, res: Response) {
  if (req.headers['x-no-compression']) {
    // don't compress responses with this request header
    return false
  }

  // fallback to standard filter function
  return compression.filter(req, res)
}
class App {
  public app: any;
  public controllerInitializer: ControllerInitializer;
  constructor() {
    this.app = express();

    this.app.use(compression({ filter: shouldCompress }))
    this._setConfig();

    this.controllerInitializer = new ControllerInitializer(this.app);


    this.app.use((req: Request, res: Response) =>
      res.status(404).send("Invalid route")
    );
  }

  private _setConfig() {
    this.app.use(bodyParser.json({ limit: "50mb" }));
    this.app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
  }
}

export default new App().app;
