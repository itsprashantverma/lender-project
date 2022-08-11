import "./dropdown.styles.scss";

import React from "react";
import { useState } from "react";

function Dropdown({ label }) {
  const [clicked, setClicked] = useState(true);

  const clickHandler = () => {
    setClicked(!clicked);
  };
  return (
    <div className="dropdown-container">
      <p>{label}</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="down-icon"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        onClick={clickHandler}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
      <div className={`menu-items ${clicked && "show"}`}>
        <button>Page 1</button>
        <button>Page 2</button>
        <button>Page 3</button>
      </div>
    </div>
  );
}

export default Dropdown;
