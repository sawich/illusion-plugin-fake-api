import express from "express";
import { join } from "path";

const app = express();

app.get("/packages/:game", function (req, res) {
  res.sendFile(`./public/packages/${req.params.game}.json`, { root: join(__dirname, "../") });
});

app.get("/scripts/:uuid", function (req, res) {
  res.sendFile(`./public/scripts/${req.params.uuid}.json`, { root: join(__dirname, "../") });
});

app.get("/games/:game", function (req, res) {
  res.sendFile(`./public/games/${req.params.game}.json`, { root: join(__dirname, "../") });
});

app.listen(3000, function () {
  console.log("App is listening on port 3000!");
});
