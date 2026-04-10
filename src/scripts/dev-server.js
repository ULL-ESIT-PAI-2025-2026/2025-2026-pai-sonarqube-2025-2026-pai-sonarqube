import express from "express";
import path from "path";

const app = express();
const PORT = process.env.PORT || 8080;
const root = path.resolve();

app.use("/src", express.static(path.join(root, "src")));
app.use("/dist", express.static(path.join(root, "dist")));
app.use(express.static(path.join(root, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(root, "src", "exercise-functions", "functions.html"));
});

app.get("/README.md", (req, res) => {
  res.sendFile(path.join(root, "README.md"));
});

app.listen(PORT, () => {
  console.log(`-----------------------------------------------`);
  console.log(`Dev server running at http://localhost:${PORT}`);
  console.log(`Serving: src/exercise-functions/functions.html`);
  console.log(`-----------------------------------------------`);
});