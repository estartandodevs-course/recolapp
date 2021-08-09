import React from "react";
import { IconsBar } from "../ActionBarIcon";

import * as S from "./styles";

// import image from "../../assets/img/icons";
import { useLocation } from "react-router-dom";

const icons = [
  {
    path: "/",
    name: "home",
    src_active: "../../assets/img/icons/home-active.svg",
    src_inactive: "../../assets/img/icons/home-inactive.svg",
  },
  {
    path: "/faq",
    name: "faq",
    src_active: "../../assets/img/icons/profile-active.svg",
    src_inactive: "../../assets/img/icons/profile-inactive.svg",
  },
  {
    path: "/profile",
    name: "profile",
    src_active: "../../assets/img/icons/qa-active.svg",
    src_inactive: "../../assets/img/icons/qa-inactive.svg",
  },
];

const TabBar = ({ ...rest }) => {
  const location = useLocation();

  return (
    <>
      <S.NavegationBar {...rest}>
        {icons.map((pk) => (
          <IconsBar
            key={pk.name}
            name={pk.name}
            image={location.path === pk.path ? pk.src_active : pk.src_inactive}
            path={pk.path}
          />
        ))}
      </S.NavegationBar>
    </>
  );
};

export { TabBar };
