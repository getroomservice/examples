import { RoomService } from "@roomservice/browser";

const rs = new RoomService({
  auth: "/api/roomservice",
});

export default function Home() {
  return (
    <div>
      In this example, an Auth Webhook is setup, but we haven't created any
      rooms. You'll want to replace the API_KEY in{" "}
      <code>{"/pages/api/roomservice.js"}</code> before you get started.
    </div>
  );
}
