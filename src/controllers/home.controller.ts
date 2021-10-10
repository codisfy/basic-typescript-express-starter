import express, { Request, response, Response } from "express";

export class HomeController {
  constructor(private app: any) {
    this.routes();
  }

  public routes() {
    let router = express.Router();
    router.get("/", this.welcome.bind(this));
    this.app.use("/", router);
  }

  public async welcome(req: Request, res: Response) {
    return res.json({all:'good'});
  }
}
