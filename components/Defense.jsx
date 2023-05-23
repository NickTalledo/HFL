"use client";

import { dStats } from "@/utils/dStats";
import Dstats from "./Dstats";
import Footer from "./Footer";

const Defense = () => {
  return (
    <div>
      <div className="topnav">
        <a href="/homepage">Home</a>
        <a href="/offense">Offensive Stats</a>
        <a className="active" href="/defense">
          Defensive Stats
        </a>
        <a href="/about">About</a>
      </div>
      <p style={{ paddingLeft: "8%" }} className="h1">
        Defensive Stats
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
