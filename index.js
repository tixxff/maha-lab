const express = require("express");
const app = express();
const MahaLap = require("./maha-lap");
const port = 3000;

app.get("/", (req, res) => res.send("เจริญพรค้าบบ"));
app.use("/public", express.static("public"));
app.get("/namo", (req, res) => {
  const day = req.query.day;
  const story = req.query.story;
  const time = req.query.time;
  const theHolynumber = MahaLap.namo(day, story, time);
  res.json({
    result: theHolynumber
  });
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
