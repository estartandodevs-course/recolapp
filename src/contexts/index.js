import { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [order, setOrder] = useState([]);

  return (
    <UserContext.Provider value={{ user, setUser, order, setOrder }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
