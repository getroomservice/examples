import { RoomService } from "@roomservice/browser";
import { useEffect, useState } from "react";

export default function Home() {
  const [presence, setPresence] = useState();
  const [positions, setPositions] = useState({});

  useEffect(() => {
    async function load() {
      const rs = new RoomService({
        auth: "/api/roomservice",
      });

      const room = await rs.room("demo");
      const p = await room.presence();
      setPresence(p);

      const v = await p.getAll("position");
      setPositions(v);

      return room.subscribe(p, "position", (msg) => {
        setPositions(msg);
      });
    }

    load().catch(console.error);
  }, []);

  function onMouseMove(e) {
    if (!presence) return;
    presence.set(
      "position",
      {
        x: e.clientX,
        y: e.clientY,
      },
      2 // expires in 2 seconds
    );
  }

  return (
    <div onMouseMove={onMouseMove} className="window">
      <p>
        In this example, your Auth Webhook is already setup, and when you move
        your mouse, the{" "}
        <a href="https://docs.roomservice.dev/docs/concepts/presence">
          Presence
        </a>{" "}
        key for the user updates in real time and is printed below. You'll want
        to replace the API_KEY in <code>{"/pages/api/roomservice.js"}</code>{" "}
        before you get started.{" "}
      </p>
      <p>
        To really see this in action, try opening this in two browser windows.
      </p>

      <pre>{JSON.stringify(positions)}</pre>
    </div>
  );
}
