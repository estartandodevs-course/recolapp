import React from "react";
import Routes from "./routes";
import { GlobalStyles } from "./styles/global-styles";

import { UserProvider } from "./contexts";

export default function App() {
  return (
    <UserProvider>
      <GlobalStyles />
      <Routes />
    </UserProvider>
  );
}
