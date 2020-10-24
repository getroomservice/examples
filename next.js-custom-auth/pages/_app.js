import "../styles/globals.css";
import { RoomServiceProvider } from "@roomservice/react";

async function myAuthFunction(room) {
  const result = await fetch("http://localhost:3000/api/roomservice", {
    method: "POST",
    headers: {
      "x-custom-header": "cool",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      resources: [
        {
          object: "room",
          reference: room,
          permission: "join",
        },
      ],
    }),
  });

  if (result.status !== 200) {
    throw new Error("Unauthorized!");
  }

  const { token, user, resources } = await result.json();
  return {
    token,
    user,
    resources,
  };
}

function MyApp({ Component, pageProps }) {
  return (
    <RoomServiceProvider
      clientParameters={{
        auth: myAuthFunction,
      }}
    >
      <Component {...pageProps} />
    </RoomServiceProvider>
  );
}

export default MyApp;
