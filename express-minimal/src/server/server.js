const express = require("express");
const fetch = require("node-fetch");
const cookieParser = require("cookie-parser");
const app = express();
const port = 8080;
app.use(express.json());
app.use(cookieParser());

function getUserIDFromSession(session) {
  return "my-user-id";
}

function isAllowedToAccessRoom(userID, room) {
  return true;
}

// This key works! But is very much not your API key.
// We'd recommend using an environment variable instead.
const API_KEY = "HjCuI4jxFy9B9TJ0UBvau";

app.post("/api/roomservice", async (req, res) => {
  const body = req.body;

  // Check if this is a valid user
  const userID = getUserIDFromSession(req.cookies.session);
  if (!userID) {
    return res.send(401);
  }

  // Check if this user can access this room
  if (!isAllowedToAccessRoom(body.room)) {
    return res.send(401);
  }

  const resources = [
    {
      object: "room",
      room: body.room,
      permission: "join",
    },
  ];

  const r = await fetch("https://super.roomservice.dev/provision", {
    method: "POST",
    headers: {
      Authorization: `Bearer: ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: userID,
      resources: resources,
    }),
  });

  return res.json(await r.json());
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
