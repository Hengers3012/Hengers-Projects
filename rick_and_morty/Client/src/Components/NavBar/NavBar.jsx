import React from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import navBarStyles from "./NavBar.module.css";

const NavLinkMe = ({ to, children, ...props }) => {
  return (
    <NavLink
      {...props}
      to={to}
      className={({ isActive }) =>
        isActive ? navBarStyles.active : navBarStyles.disable
      }
    >
      {children}
    </NavLink>
  );
};
export default function NavBar(props) {
  return (
    <div className={navBarStyles.navBarContainer}>
      <NavLinkMe to="/home">Home</NavLinkMe>
      <NavLinkMe to="/about">About</NavLinkMe>
      <div className={navBarStyles.navBarSearch}>
        <SearchBar onSearch={(characterID) => props.onSearch(characterID)} />
      </div>
    </div>
  );
}
