import { HomeController } from "./controllers/home.controller";

export default class ControllerInitializer {
  public app: any;
  public homeController: HomeController;

  constructor(app: any) {
    this.app = app;
    this.homeController = new HomeController(app);
  }
}
