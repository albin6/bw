const express = require("express");
const fs = require("fs");

const app = express();

app.get("/file-content", (req, res) => {
  const data = fs.readFileSync("sample.txt", "utf8");
});
