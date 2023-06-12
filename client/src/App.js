import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Rooms from "./components/Rooms";
import ChatPage from "./components/ChatPage";
import NoPage from "./components/NoPage";
import { SocketProvider } from "./socketContext";

function App() {
  const rooms = [
    { id: 1, path: "/chet1", name: "Room 1" },
    { id: 2, path: "/chet2", name: "Room 2" },
    { id: 3, path: "/chet3", name: "Room 3" },
  ];

  const pathes = rooms.map((room) => (
    <Route
      key={room.id}
      path={room.path}
      element={<ChatPage roomName={room.name} />}
    ></Route>
  ));
  return (
    <SocketProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/rooms" element={<Rooms />}></Route>
          {pathes}
          <Route path="*" element={<NoPage />}></Route>
        </Routes>
      </BrowserRouter>
    </SocketProvider>
  );
}

export default App;
