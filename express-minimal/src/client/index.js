import { RoomService } from "@roomservice/browser";

const service = new RoomService({
  auth: "/api/roomservice",
});

async function start() {
  const room = await service.room("express-minimal");
  let list = await room.list("todos");

  list = list.push("water plants");

  room.subscribe(list, (nextList) => {
    // do something with incoming lists updates
  });
}

start().catch(console.error);
