"use client";

import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <div>
      <Header className="page-container" />
      <div style={{ paddingLeft: "10%" }}>
        <p className="h1">The Hangover Football League</p>
      </div>
      <br />
      <div className="flex-container">
        <div className="text-table1-container">
          <div className="text-container">
            <p>
              Welcome to Week 4 of our thrilling league! The day started off
              with an impressive victory for the Bulls, who defeated the
              Redskins with a decisive score of 47-25. It was a game filled with
              interceptions, and unfortunately for the Redskins, they
              couldn&apos;t overcome this challenge. The Bulls showcased their
              top-ranked defense, demonstrating that a strong defense can indeed
              win games.
              <br /> <br />
              In another exciting match, the Blue Ballers triumphed over the
              Bomb Squad with a dominant score of 56-34. With Danny Gonzo
              stepping in as quarterback, the Blue Ballers experienced a
              significant upgrade. Danny Gonzo proved to be relentless on both
              offense and defense, leading the team to a stellar performance.
              <br /> <br />
              Meanwhile, The Clan initially had the upper hand against Miami
              Vice, but as the game progressed, Miami Vice made an impressive
              comeback. However, in a dramatic ending, Miami Vice attempted a
              touchdown and a two-point conversion to secure the win. The
              Clan&apos;s defense stepped up and successfully stopped the
              conversion, ultimately winning the game with a close score of
              53-52. Week 4 has certainly delivered exciting and unpredictable
              moments. Stay tuned as the league continues to unfold!
            </p>
            <br />
          </div>

          <div>
            <div style={{ paddingLeft: "8%" }}>
              <p className="h2">HFL Team Rankings</p>
            </div>
            <div style={{ paddingLeft: "5%" }}>
              <table>
                <thead>
                  <tr>
                    <th>Team</th>
                    <th>Record</th>
                    <th>Points Scored</th>
                    <th>Points Allowed</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>The Clan</td>
                    <td>3-1</td>
                    <td>185</td>
                    <td>184</td>
                  </tr>
                  <tr>
                    <td>Blue Ballers</td>
                    <td>3-1</td>
                    <td>170</td>
                    <td>185</td>
                  </tr>
                  <tr>
                    <td>Miami Vice</td>
                    <td>2-2</td>
                    <td>221</td>
                    <td>191</td>
                  </tr>
                  <tr>
                    <td>Bulls</td>
                    <td>2-2</td>
                    <td>198</td>
                    <td>178</td>
                  </tr>
                  <tr>
                    <td>Redskins</td>
                    <td>1-3</td>
                    <td>196</td>
                    <td>225</td>
                  </tr>
                  <tr>
                    <td>Bomb Squad</td>
                    <td>1-3</td>
                    <td>196</td>
                    <td>246</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="table2-container">
          <div style={{ paddingLeft: "8%" }}>
            <p className="h2">League Schedule</p>
            <br />
          </div>
          <div style={{ paddingLeft: "5%" }}>
            <table className="table2">
              <thead>
                <tr>
                  <th>Week</th>
                  <th>Teams</th>
                  <th>Scores</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Week 1</td>
                  <td>
                    Redskins vs Bulls <br /> The Clan vs Blue Ballers <br />{" "}
                    Bomb Squad vs Miami Vice
                  </td>
                  <td>
                    71-50 <br /> 47-34 <br /> 36-64
                  </td>
                </tr>
                <tr>
                  <td>Week 2</td>
                  <td>
                    The Clan vs Bomb Squad
                    <br /> Redskins vs Blue Ballers <br /> Miami Vice vs Bulls
                  </td>
                  <td>
                    64-51 <br /> 38-52 <br /> 61-52
                  </td>
                </tr>
                <tr>
                  <td>Week 3</td>
                  <td>
                    Blue Ballers vs Miami Vice <br /> Bulls vs The Clan <br />{" "}
                    Bomb Squad vs Redskins
                  </td>
                  <td>
                    50-44 <br /> 47-21 <br /> 75-62
                  </td>
                </tr>
                <tr>
                  <td>Week 4</td>
                  <td>
                    Redskins vs Bulls <br /> Blue Ballers vs Bomb Squad <br />{" "}
                    Miami Vice vs The Clan
                  </td>
                  <td>
                    25-47 <br /> 56-34 <br /> 52-53
                  </td>
                </tr>
                <tr>
                  <td>Week 5</td>
                  <td>
                    Bomb Squad vs The Clan <br /> Redskins vs Miami Vice <br />{" "}
                    Bulls vs Blue Ballers
                  </td>
                  <td>
                    TBD <br /> TBD <br /> TBD
                  </td>
                </tr>
                <tr>
                  <td>Week 6</td>
                  <td>
                    TBD <br /> TBD <br /> TBD
                  </td>
                  <td>
                    TBD <br /> TBD <br /> TBD
                  </td>
                </tr>
                <tr>
                  <td>Week 7</td>
                  <td>
                    TBD <br /> TBD <br /> TBD
                  </td>
                  <td>
                    TBD <br /> TBD <br /> TBD
                  </td>
                </tr>
                <tr>
                  <td>Week 8</td>
                  <td>
                    TBD <br /> TBD <br /> TBD
                  </td>
                  <td>
                    TBD <br /> TBD <br /> TBD
                  </td>
                </tr>
                <tr>
                  <td>Week 9</td>
                  <td>
                    TBD <br /> TBD <br /> TBD
                  </td>
                  <td>
                    TBD <br /> TBD <br /> TBD
                  </td>
                </tr>
                <tr>
                  <td>Playoffs 1</td>
                  <td>
                    1st seed <br /> 2nd seed vs 3rd seed <br /> 4th seed vs 5th
                    seed
                  </td>
                  <td>
                    BYE <br /> TBD <br /> TBD
                  </td>
                </tr>
                <tr>
                  <td>Playoffs 2</td>
                  <td>
                    1st seed vs 4th/5th seed winner <br /> 2nd/3rd seed winner
                  </td>
                  <td>
                    TBD <br /> BYE
                  </td>
                </tr>
                <tr>
                  <td>Championship</td>
                  <td>TBD</td>
                  <td>
                    TBD <br />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <br />
      <div style={{ borderTop: "3px solid black" }}></div>
      <Footer className="footer" />
    </div>
  );
};

export default HomePage;
