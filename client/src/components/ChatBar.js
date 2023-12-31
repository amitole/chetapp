import { useContext } from "react";
import { UsersContext } from "../context/UsersContext";

const ChatBar = ({ socket, roomName }) => {
  const [users] = useContext(UsersContext);

  const usersInTheRoom = users.filter((user) => user.roomNumber === roomName);

  return (
    <div className="chat__sidebar">
      <h2> {roomName} Chat</h2>
      <div>
        <h4 className="chat__header">ACTIVE USERS</h4>
        <div className="chat__users">
          {usersInTheRoom.map((user) => (
            <p key={user.socketID}>{user.userName}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatBar;
