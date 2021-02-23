import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import passport from "passport";
import session from "express-session";

import mongoose from "mongoose";

import globalRouter from "./routers/globalRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";
import { localsMiddleware } from "./middlewares";
import routes from "./routes";
import "./passport";

const app = express();

const MongoStore = require("connect-mongo").default;

app.use("/upload", express.static("upload"));
app.use("/static", express.static("static"));

app.use(helmet({ contentSecurityPolicy: false }));
app.set("view engine","pug");
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(
    session({
      secret: process.env.SECRET_KEY,
      resave: true,
      saveUninitialized: false,
      store: MongoStore.create({ mongoUrl: process.env.MONGO_URL })
    })
);
    
app.use(passport.initialize());
app.use(passport.session());
    
app.use(localsMiddleware)
app.use(routes.home,globalRouter)
app.use(routes.videos,videoRouter)
app.use(routes.users,userRouter)

export default app;

