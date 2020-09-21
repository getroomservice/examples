const express = require("express");
const fetch = require("node-fetch");
const app = express();
const port = 8080;

app.use(express.static("dist"));
app.use(express.json());

const API_KEY = "HjCuI4jxFy9B9TJ0UBvau";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

app.post("/api/roomservice", async (req, res) => {
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

  if (r.status !== 200) {
    throw new Error(
      `The API call to Room Service failed! (${r.status}) Be sure to update the API_KEY to your own.`
    );
  }

  const json = await r.json();
  res.json(json);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
