import express from "express";
import morgan from "morgan";
import { route } from "./routes/index.js";
import { connect } from "./config/database/index.js";
import methodOverride from "method-override";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
const port = 5000;
//Connect to db
connect();
//HTTP logger
app.use(morgan("combined"));

route(app);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
