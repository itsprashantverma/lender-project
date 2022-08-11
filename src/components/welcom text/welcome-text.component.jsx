import "./welcome-text.styles.scss";

import React from 'react'
import { useContext } from "react";
import { MenuContext } from "../../context/menu.context";

function WelcomeText() {
  const{menu} = useContext(MenuContext)

  return (
    <div className={`welcome-container ${menu && 'menu-open'}`}>Hi johnsmith@mail.com,</div>
  )
}

export default WelcomeText