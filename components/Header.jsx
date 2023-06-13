"use client";

import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="topnav">
      <button onClick={toggleMenu} className="hamburger">
        ☰
      </button>
      <nav className={`navlinks ${isOpen ? "show" : ""}`}>
        <a className="active" href="/homepage">
          Home
        </a>
        <a href="/news">News</a>
        <a href="/offense">Offensive Stats</a>
        <a href="/defense">Defensive Stats</a>
        <a href="/about">About</a>
      </nav>
    </div>
  );
};

export default Header;
