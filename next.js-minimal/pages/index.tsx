import { useMap } from "@roomservice/react";

export default function Home() {
  const [form, map] = useMap<{ title: string; description: string }>(
    "myroom",
    "myform"
  );

  return (
    <div className="intro-container">
      <p>
        This is a minimal Next.js example with Room Service. It follows the{" "}
        <a href="https://roomservice.dev/docs/react-getting-started">
          guide here.
        </a>
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
