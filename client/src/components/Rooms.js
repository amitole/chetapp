import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Rooms = () => {
  const rooms = [
    { id: 1, path: "/chet1", name: "Room 1" },
    { id: 2, path: "/chet2", name: "Room 2" },
    { id: 3, path: "/chet3", name: "Room 3" },
  ];

  const links = rooms.map((room) => (
    <li key={room.id} className="room__btn">
      <Link to={room.path}>{room.name}</Link>
    </li>
  ));
  const navigate = useNavigate();
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
          {/* <li className="room__btn">
            <Link to="/chet1">Room 1</Link>
          </li>
          <li className="room__btn">
            <Link to="/chet2">Room 2</Link>
          </li>
          <li className="room__btn">
            <Link to="/chet3">Room 3</Link>
          </li> */}
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
