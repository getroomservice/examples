import { usePresence } from "@roomservice/react";

export default function Home() {
  const [positions, setMyPosition] = usePresence("room", "position");

  function onMouseMove(e) {
    setMyPosition({
      x: e.clientX,
      y: e.clientY,
    });
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
