const express = require("express");
const fetch = require("node-fetch");
const cookieParser = require("cookie-parser");
const app = express();
const port = 8080;
app.use(express.json());
app.use(cookieParser());

function isValidSession(session) {
  return true;
}

// This key works! But is very much not your API key.
// We'd recommend using an environment variable instead.
const API_KEY = "HjCuI4jxFy9B9TJ0UBvau";

app.post("/api/roomservice", async (req, res) => {
  const isLoggedIn = isValidSession(req.cookies.session);
  if (!isLoggedIn) {
    return res.send(401);
  }

  const body = req.body;
  const r = await fetch("https://super.roomservice.dev/provision", {
    method: "POST",
    headers: {
      Authorization: `Bearer: ${API_KEY}`,
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      user: "my-user-id",
      resources: body.resources,
    }),
  });

  return res.json(await r.json());
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
