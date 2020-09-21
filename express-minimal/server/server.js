const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("./dist"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "./dist/index.html");
});

const API_KEY = "YOUR_API_KEY_HERE";

app.post("/roomservice", async (req, res) => {
  const body = req.body;
  const user = "some-user-" + getRandomInt(1, 200);

  const r = await fetch("https://super.roomservice.dev/provision", {
    method: "post",
    headers: {
      Authorization: `Bearer: ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: user,
      resources: body.resources,
    }),
  });

  const json = await r.json();
  res.json(json);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
