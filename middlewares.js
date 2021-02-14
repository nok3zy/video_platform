import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "video_platform";
  res.locals.routes = routes;
  next();
};