"use client";

import { dStats } from "@/utils/dStats";
import Dstats from "./Dstats";
import Footer from "./Footer";
import { useState } from "react";
const Defense = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className="topnav">
        <button onClick={toggleMenu} className="hamburger">
          ☰
        </button>
        <nav className={`navlinks ${isOpen ? "show" : ""}`}>
          <a href="/homepage">Home</a>
          <a href="/news">News</a>
          <a href="/offense">Offensive Stats</a>
          <a className="active" href="/defense">
            Defensive Stats
          </a>
          <a href="/about">About</a>
        </nav>
      </div>
      <p style={{ paddingLeft: "8%" }} className="h1">
        Defensive Stats
      </p>
      <p style={{ paddingLeft: "8%" }}>
        Click on the titles of the stats to sort them!
      </p>
      <br />
      <Dstats dStats={dStats} />
      <br />
      <div style={{ borderTop: "3px solid black" }}></div>
      <Footer />
    </div>
  );
};

export default Defense;
