import { useMap } from "@roomservice/react";
import { useEffect } from "react";

export default function Home() {
  const [form, map] = useMap(
    "myroom",
    "myform"
  );

  useEffect(() => {
    document.title = form.title || "";
  }, [form["title"]]);

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
          <li>Two interactive text fields in this file</li>
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
        in two tabs. Edits to the text in one will show up in the other.
      </p>

      <label>
        Title{" "}
        <input
          value={form.title}
          onChange={(e) => map?.set("title", e.target.value)}
        />
      </label>

      <br />

      <label>
        Description{" "}
        <input
          value={form.description}
          onChange={(e) => map?.set("description", e.target.value)}
        />
      </label>
    </div>
  );
}
