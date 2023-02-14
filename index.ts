import express from "express";
import { postRoutes } from "./routes/postRoutes";
import { pollRoutes } from "./routes/pollRoutes";
import { commentRoutes } from "./routes/commentRoutes";
import { profileRoutes } from "./routes/profileRoutes";
import { feedRoutes } from "./routes/feedRoutes";

// initialise express application
const app: express.Application = express();
// define the port
const port = 3000;
// api name
const apiName = "OpenSM";
// for request body parsing
app.use(express.json());
// routes
app.use("/post/", postRoutes);
app.use("/poll/", pollRoutes);
app.use("/comment/", commentRoutes);
app.use("/profile/", profileRoutes);
app.use("/feed/", feedRoutes);

app.listen(port, () => {
  console.log(`${apiName} listening on port ${port}`);
});

export default app;
