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
      Hello! This demo works better with friends. Share the link with someone!
      <pre>{JSON.stringify(positions)}</pre>
    </div>
  );
}
