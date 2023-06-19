import { createContext } from "react";
import io from "socket.io-client";

const SocketContext = createContext();

const SocketProvider = ({ children }) => {
  const ENDPOINT = "http://localhost:4000";
  const socket = io(ENDPOINT, { transports: ["websocket", "polling"] });
  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};

export { SocketContext, SocketProvider };
