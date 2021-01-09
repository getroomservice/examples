import { useMap, usePresence } from "@roomservice/react";
import { useEffect } from "react";

export default function Home() {
  const [positions, positionsClient] = usePresence("my-room", "positions");

  useEffect(() => {
    window.onmousemove = (e: MouseEvent) => {
      positionsClient.set({ x: e.clientX, y: e.clientY });
    };
  }, []);

  return (
    <div className="intro-container">
      <p>
        This example has the bare-bones you need to get started with
        RoomService, including
        <ul>
          <li>
            An auth endpoint in <code>/pages/api/roomservice.ts</code>
          </li>
          <li>
            A <code>{`<RoomServiceProvider />`}</code> wrapping the React app in{" "}
            <code>{"/pages/_app.ts"}</code>
          </li>
          <li>Syncing of cursor positions</li>
        </ul>
        All you need is a free API key from{" "}
        <a href="https://app.roomservice.dev" target="_blank">
          app.roomservice.dev
        </a>
        . Then add <code>{"ROOMSERVICE_API_KEY=<your api key>"}</code> to a{" "}
        <code>.env</code> file in the root directory of this example (in the
        same directory as the <code>package.json</code> file).
      </p>
      <p>
        Finally, restart your <code>yarn dev</code> command and open this page
        in two tabs. Since we are storing the user id in local storage, you will
        only see one user unless you also open an incognito window or another
        browser.
      </p>

      <div>Positions: {JSON.stringify(positions)}</div>
    </div>
  );
}
