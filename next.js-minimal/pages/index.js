export default function Home() {
  return (
    <div>
      In this example, an Auth Webhook is setup, we've hooked up a{" "}
      <code>{`<RoomServiceProvider />`}</code> in{" "}
      <code>{"/pages/_app.js"}</code> but we haven't created any rooms. You'll
      want to replace the API_KEY in <code>{"/pages/api/roomservice.js"}</code>{" "}
      before you get started.
    </div>
  );
}
