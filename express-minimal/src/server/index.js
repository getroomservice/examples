const express = require("express");
const fetch = require("node-fetch");
const app = express();
const port = 8080;
app.use(express.json());

// Replace this with your authorization scheme.
function isLoggedIn(req) {
  return true; // for the moment, we'll just let everyone in
}

const API_KEY = "HjCuI4jxFy9B9TJ0UBvau";

app.post("/api/roomservice", async (req, res) => {
  if (!isLoggedIn(req)) {
    return res.send(401);
  }

  // In practice, this should be whatever user id YOU use.
  const user = Math.random().toString(36).substr(2, 9);
  const body = req.body;
  const r = await fetch("https://super.roomservice.dev/provision", {
    method: "POST",
    headers: {
      Authorization: `Bearer: ${API_KEY}`,
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      user: user,
      resources: body.resources,
    }),
  });

  return res.json(await r.json());
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
