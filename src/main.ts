import express from "express";
import { resolve } from "path";

const app = express();

app.get("/packages/:game", function (req, res) {
  res.sendFile(`./public/packages/${req.params.game}.json`, { root: resolve(__dirname, "../") });
});

app.get("/scripts/:uuid", function (req, res) {
  res.sendFile(`./public/scripts/${req.params.uuid}.json`, { root: resolve(__dirname, "../") });
});

app.listen(3000, function () {
  console.log("App is listening on port 3000!");
});
