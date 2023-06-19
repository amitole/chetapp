import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { SocketContext } from "../context/SocketsContext";
import { UsersContext } from "../context/UsersContext";

const Rooms = () => {
  const socket = useContext(SocketContext);
  const [users, setUsers] = useContext(UsersContext);
  const navigate = useNavigate();

  useEffect(() => {
    socket.on("newUserResponse", (data) => setUsers(data));
  }, [socket, users]);

  const rooms = [
    { id: 1, path: "/chet1", name: "Room 1" },
    { id: 2, path: "/chet2", name: "Room 2" },
    { id: 3, path: "/chet3", name: "Room 3" },
  ];

  const links = rooms.map((room) => (
    <li key={room.id} className="room__btn">
      <Link to={room.path} onClick={() => userJoinRoom(room.name)}>
        {room.name}
      </Link>
    </li>
  ));

  const userJoinRoom = (roomNumber) => {
    localStorage.setItem("roomNumber", roomNumber);
    socket.emit("userJoinRoom", {
      userName: localStorage.getItem("userName"),
      socketID: socket.id,
      roomNumber,
    });
  };

  const handleLeaveChat = () => {
    localStorage.removeItem("userName");
    navigate("/");
    window.location.reload();
  };
  return (
    <>
      <nav>
        <ul>
          {links}
          <li>
            <button className="leaveChat__btn" onClick={handleLeaveChat}>
              LOG OFF
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Rooms;
