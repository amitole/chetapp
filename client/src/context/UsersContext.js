import { useState, createContext } from "react";

const UsersContext = createContext();
const { Provider } = UsersContext;

const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  return <Provider value={[users, setUsers]}> {children} </Provider>;
};

export { UsersProvider , UsersContext };