import { useMap } from "@roomservice/react";
import { useEffect } from "react";

export default function Home() {
  const [map, setMap] = useMap("coolio", "mymap");

  useEffect(() => {
    setInterval(() => {
      if (map === undefined) return;
      setMap(map.set("time", new Date().toString()));
    }, 1000);
  }, []);

  if (!map) {
    return "Loading...";
  }

  return (
    <div>
      In this example, an Auth Webhook is setup, we've hooked up a{" "}
      <code>{`<RoomServiceProvider />`}</code> with a custom auth function in{" "}
      <code>{"/pages/_app.js"}</code> but we haven't created any rooms. You may
      want to see the code there for more.
    </div>
  );
}
