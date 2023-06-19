import { useEffect, useState, useRef, useContext } from "react";
import ChatBar from "./ChatBar";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";
import { SocketContext } from "../context/SocketsContext";

const ChatPage = ({ roomName }) => {
  const [messages, setMessages] = useState([]);
  const [typingStatus, setTypingStatus] = useState("");
  const lastMessageRef = useRef(null);
  const socket = useContext(SocketContext);

  useEffect(() => {
    socket.on("messageResponse", (data) => setMessages([...messages, data]));
  }, [socket, messages]);

  useEffect(() => {
    socket.on("typingResponse", (data) => setTypingStatus(data));
  }, [socket]);

  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);


  const roomMessages = messages.filter((msg) => msg.roomNumber === roomName);

  return (
    <div className="chat">
      <ChatBar socket={socket} roomName={roomName} />
      <div className="chat__main">
        <ChatBody
          messages={roomMessages}
          typingStatus={typingStatus}
          lastMessageRef={lastMessageRef}
        />
        <ChatFooter socket={socket} />
      </div>
    </div>
  );
};

export default ChatPage;
