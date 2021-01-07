import "../styles/globals.css";
import { RoomServiceParameters, RoomServiceProvider } from "@roomservice/react";
import { useEffect, useState } from "react";
import { customAlphabet, nanoid } from "nanoid";

async function myAuthFunction(params: {
  room: string;
  ctx: { userID: number };
}) {
  const response = await fetch("/api/roomservice", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    //  Pass cookies to server
    credentials: "include",
    body: JSON.stringify({
      room: params.room,

      //  TODO: Determine userID on server based on cookies or values passed in here.
      user: params.ctx.userID,
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
  const userID = useUserID();
  return (
    <RoomServiceProvider
      //  Don't connect until the userID is set
      online={userID != undefined}
      clientParameters={{
        auth: myAuthFunction,
        //  Passed into myAuthFunction when RoomService connects. Include
        //  anything you need here to identify the user on the server.
        ctx: {
          userID,
        },
      }}
    >
      <Component {...pageProps} />
    </RoomServiceProvider>
  );
}

//  Stores a random userID in localStorage. Remove this once you have integrated
//  your own authentication scheme.
function useUserID(): string | undefined {
  const [userID, setUserID] = useState<string>();

  //  useEffect forces this to happen on the client
  useEffect(() => {
    if (window.localStorage.getItem("roomservice-user") == null) {
      const generateBase62ID = customAlphabet(
        "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
        22
      );
      const userID = generateBase62ID();
      window.localStorage.setItem("roomservice-user", userID);
      setUserID(userID);
    }
  }, []);

  return userID;
}

export default MyApp;
