import { useMap } from "@roomservice/react";

export default function Home() {
  const [form, map] = useMap("myroom", "myform");

  return (
    <div>
      <div>
        In this example, an Auth Webhook is setup, we've hooked up a{" "}
        <code>{`<RoomServiceProvider />`}</code> in{" "}
        <code>{"/pages/_app.js"}</code>. You'll want to replace the API_KEY in{" "}
        <code>{"/pages/api/roomservice.js"}</code> before you get started.
      </div>

      <label>
        Title
        <input
          value={form.title}
          onChange={(e) => map.set("title", e.target.value)}
        />
      </label>

      <label>
        Description
        <input
          value={form.description}
          onChange={(e) => map.set("description", e.target.value)}
        />
      </label>
    </div>
  );
}
