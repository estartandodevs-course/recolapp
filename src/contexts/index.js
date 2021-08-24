import React, { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [order, setOrder] = useState([]);
  const [orderTimestamp, setOrderTimestamp] = useState("");

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        order,
        setOrder,
        orderTimestamp,
        setOrderTimestamp,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
