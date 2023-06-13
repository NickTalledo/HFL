"use client";
import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

const News = () => {
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
          <a className="active" href="/news">
            News
          </a>
          <a href="/offense">Offensive Stats</a>
          <a href="/defense">Defensive Stats</a>
          <a href="/about">About</a>
        </nav>
      </div>
      <div>
        <p className="h1 news-container">News</p>
      </div>
      <br />
      <div className="news-container">
        <p>
          TRADE ALERT 6//12/2023: A second trade has been made! Andrew Gonzo and
          Nico have been traded from the Redskins to Miami Vice for Sergio and
          Nico. Many players though the trade was a prank and were not happy
          with it being real. Some say the league is in shambles with Miami Vice
          trying to build a super team and with the Redskins seeming to give up.
          Let us go to some of the players and see what they are saying:
          <br />
          &quot;If you want off my team, just say so. I&apos;m done&quot; -
          Jonny
          <br />
          &quot;Hell yeah I&apos;m happy, I just wasn&apos;t getting treated
          right&quot; - Andrew Gonzo
          <br />
          &quot;Holy sh*t Holy sh*t Holy sh*t&quot; - Anthony Perlongo
          <br />
          &quot;Commisioner should be ashamed of himself&quot; - Nick Dinicola
          <br />
          &quot;F**king bullsh*t I tell you, this league has gone to sh*t&quot;
          - Devin
          <br />
          &quot;Wait that trade was a prank, right?&quot; - Nick Venditti
          <br />
          &quot;I&apos;m still in the league?&quot; - Deni
          <br /> <br />
          Trouble in Paradise? 6//11/2023: The Blue Ballers seems to have
          changed their quarterback position. Danny Gonzo, WR1, switched to
          quarterback when Nicky had to leave after one drive. His stunning
          performance has the team questioning who they should place at the
          position. There are also questions of who is the true captain of the
          team. Here are some of the interviews that took place:
          <br />
          &quot;I still own this team, QB or not! Huh? Hey they didn&apos;t
          throw me out of QB! I chose to step down! &quot; - Nicky
          <br />
          &quot;We all have an equal say obviously. That being said, yes I am
          the captain&quot; - Josh Soler
          <br />
          &quot;They couldn&apos;t do that a week earlier?&quot; - Nick Talledo
          <br />
          &quot;I personally think I can do much better than Nicky has been at
          the QB position. He&apos;s a nervous wreck. Wait, this stays in
          between us, right?&quot; - Danny Gonzo
          <br /> <br />
          TRADE ALERT 6/6/2023: Our first trade of the season has been made!
          After some inner disputes, Nick Talledo has been traded to the Bomb
          Squad! The Blue Ballers will receive Andrew Aspromonte. Many are
          saying this trade is a huge win for Bomb Squad while Blue Ballers got
          the short end of the stick. We asked some players their views on this,
          here are their responses:
          <br /> &quot;Listen, at a point, enough is enough. I&apos;m sick of
          playing with mediocrity&quot; - Nick Talledo
          <br />
          &quot;He just isn&apos;t a team player anymore, we had to get rid of
          him&quot; - Nicky
          <br />
          &quot;Get that camera out of my f**king face&quot; - Josh Soler
          <br />
          &quot;Let&apos;s f**king gooo&quot; - Stephen Aspromonte
          <br />
          &quot;Wait what&apos;s happening?&quot; - Andrew Aspromonte
          <br /> <br />
        </p>
        <br />
      </div>
      <br />
      <div style={{ borderTop: "3px solid black" }}></div>
      <Footer className="footer" />
    </div>
  );
};

export default News;
