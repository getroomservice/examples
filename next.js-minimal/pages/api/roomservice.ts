// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";

const apiKey = process.env.ROOMSERVICE_API_KEY;

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const body = req.body;
  const user = req.body.user;

  const resources = [
    {
      object: "room",
      room: body.room,
      permission: "join",
    },
  ];

  if (!apiKey) {
    const error =
      "API key not set. Grab yours from https://app.roomservice.dev and add ROOMSERVICE_API_KEY=<your_api_key> to a .env file on your server.";
    res.statusCode = 500;
    res.write(error);
    throw error;
  }

  const r = await fetch("https://super.roomservice.dev/provision", {
    method: "post",
    headers: {
      Authorization: `Bearer: ${process.env.ROOMSERVICE_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: user,
      resources: resources,
    }),
  });

  const json = await r.json();
  res.json(json);
};