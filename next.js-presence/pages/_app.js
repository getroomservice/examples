import "../styles/globals.css";
import { RoomServiceProvider } from "@roomservice/react";

async function myAuthFunction(params) {
  const response = await fetch("/api/roomservice", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      room: params.room,
    }),
  });

  if (response.status === 401) {
    throw new Error("Unauthorized!");
  }

  const body = await response.json();
  return {
    user: body.user,
    resources: body.resources,
    token: body.token,
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
