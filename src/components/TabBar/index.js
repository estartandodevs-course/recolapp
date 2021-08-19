import React from "react";
import { useLocation } from "react-router-dom";
import { IconsBar } from "../ActionBarIcon";

import * as S from "./styles";

import {
  homeActive,
  homeInactive,
  qaActive,
  qaInactive,
  profileActive,
  profileInactive,
} from "../../assets/img/icons";

const mainIcons = [
  {
    pathname: "/home",
    name: "home",
    src_active: homeActive,
    src_inactive: homeInactive,
  },
  {
    pathname: "/faq",
    name: "faq",
    src_active: qaActive,
    src_inactive: qaInactive,
  },
  {
    pathname: "/profile",
    name: "profile",
    src_active: profileActive,
    src_inactive: profileInactive,
  },
];

const TabBar = ({ ...rest }) => {
  const location = useLocation();

  return (
    <>
      <S.NavegationBar {...rest}>
        {mainIcons.map((menuItem) => (
          <IconsBar
            key={menuItem.name}
            name={menuItem.name}
            image={
              location.pathname === menuItem.pathname
                ? menuItem.src_active
                : menuItem.src_inactive
            }
            path={menuItem.pathname}
          />
        ))}
      </S.NavegationBar>
    </>
  );
};

export { TabBar };
