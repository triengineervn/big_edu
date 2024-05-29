import siteRouter from "./site-route.js";

export function route(app) {
  app.use("/", siteRouter);
}
