import "../styles/globals.css";
import { RoomServiceProvider } from "@roomservice/react";

function MyApp({ Component, pageProps }) {
  return (
    <RoomServiceProvider
      clientParameters={{
        auth: "/api/roomservice",
      }}
    >
      <Component {...pageProps} />
    </RoomServiceProvider>
  );
}

export default MyApp;
