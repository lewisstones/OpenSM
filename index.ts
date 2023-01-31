import express from "express";
import { postRoutes } from "./routes/postRoutes";

// initialise express application
const app: express.Application = express();
// define the port
const port = 3000;
// api name
const apiName = "OpenSM";
// routes
app.use("/", postRoutes);

app.listen(port, () => {
  console.log(`${apiName} listening on port ${port}`);
});

export default app;
