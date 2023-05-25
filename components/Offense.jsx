"use client";

import { oStats } from "@/utils/oStats";
import Footer from "./Footer";
import Ostats from "./Ostats";
import Qbstats from "./Qbstats";
import { qbStats } from "@/utils/qbStats";
import { useState } from "react";
const Offense = () => {
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
          <a className="active" href="/offense">
            Offensive Stats
          </a>
          <a href="/defense">Defensive Stats</a>
          <a href="/about">About</a>
        </nav>
      </div>
      <p style={{ paddingLeft: "8%" }} className="h1">
        Quarterback Offensive Stats
      </p>
      <br />
      <Qbstats qbStats={qbStats} />
      <br />
      <p style={{ paddingLeft: "8%" }} className="h1">
        Receiver Offensive Stats
      </p>
      <br />

      <Ostats oStats={oStats} />
      <br />
      <div style={{ borderTop: "3px solid black" }}></div>

      <Footer />
    </div>
  );
};

export default Offense;
