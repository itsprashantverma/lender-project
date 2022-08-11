import "./navbar.styles.scss";

import React from "react";

import Dropdown from "../dropdown/dropdown.component";
import { MenuContext } from "../../context/menu.context";
import { useContext } from "react";

import companyLogo from "../../assets/companylogo.png";

function Navbar() {
  const { menu, setMenu } = useContext(MenuContext);

  const handleClick = () => {
    console.log(menu);
    setMenu(!menu);
  };
  return (
    <nav>
      <div className="nav-container">
        <img src={companyLogo} className="logo" />
        <div className={`main-nav ${!menu && "nav-close"} `}>
          <div className="choice-dropdown">
            <Dropdown label={"I want to..."} />
          </div>
          <div className="vl">&nbsp;</div>
          <div>Dashboard</div>
          <div className="vl">&nbsp;</div>
          <div>Advice</div>
          <div className="vl">&nbsp;</div>
          <div className="user-dropdown">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="user-icon"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
            <Dropdown label={"Sam Michael"} />
          </div>
        </div>
        <button className="btn-mobile-nav">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon-mobile-nav icon-menu"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            onClick={handleClick}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
