import { RoomService } from "@roomservice/browser";

const service = new RoomService({
  auth: async (params) => {
    const response = await fetch("http://localhost:8080/api/roomservice", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        room: params.room,
      }),
    });

    if (response.status === 401) {
      throw new Error("Unauthorized!");
    }

    const body = await response.json();
    return {
      user: body.user,
      resources: body.resources,
      token: body.token,
    };
  },
});

async function start() {
  const room = await service.room("express-minimal");
  let list = room.list("todos");

  list = list.push("water plants");

  room.subscribe(list, (asArray) => {
    // do something with incoming lists updates
  });
}

start().catch(console.error);
