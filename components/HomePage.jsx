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
              Week 5 of our league provided some intense matchups and surprising
              outcomes. The first game featured a low-scoring battle between
              Bomb Squad and The Clan, with The Clan emerging victorious with a
              score of 39-25. Nick Venditti delivered an outstanding
              performance, amassing 170 yards and scoring 3 touchdowns,
              showcasing his exceptional skills. The Clan now boasts the most
              wins, improving their record to 4-1 and solidifying their position
              as a top contender.
              <br />
              <br />
              In the second game, the Blue Ballers and the Bulls faced off. The
              Blue Ballers had a promising start, leading 26-14 at halftime.
              However, the Bulls staged an incredible comeback in the second
              half, scoring 45 unanswered points and securing a dominant victory
              with a final score of 59-26. The Bulls&apos; impressive
              performance extended their winning streak to three games,
              overcoming their initial two losses and showcasing their
              resilience.
              <br />
              <br />
              The final game of Week 5 featured the new Miami Vice against the
              Redskins. It turned out to be a complete blowout, with the Miami
              Vice displaying relentless offense and emerging victorious with an
              astonishing final score of 78-46. Their remarkable offensive
              display marked the highest scoring performance of the season thus
              far. Meanwhile, the Redskins faced challenges and seemed to be
              struggling as a team. Week 5 brought excitement, unexpected
              outcomes, and notable performances. The league dynamics continue
              to shift as some teams rise while others face setbacks. Stay tuned
              for more thrilling matchups in the upcoming weeks!
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
                    <td>4-1</td>
                    <td>224</td>
                    <td>209</td>
                  </tr>
                  <tr>
                    <td>Miami Vice</td>
                    <td>3-2</td>
                    <td>299</td>
                    <td>237</td>
                  </tr>
                  <tr>
                    <td>Bulls</td>
                    <td>3-2</td>
                    <td>257</td>
                    <td>204</td>
                  </tr>
                  <tr>
                    <td>Blue Ballers</td>
                    <td>3-2</td>
                    <td>196</td>
                    <td>244</td>
                  </tr>
                  <tr>
                    <td>Redskins</td>
                    <td>1-4</td>
                    <td>241</td>
                    <td>303</td>
                  </tr>
                  <tr>
                    <td>Bomb Squad</td>
                    <td>1-4</td>
                    <td>221</td>
                    <td>285</td>
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
                    Bomb Squad vs The Clan <br /> Bulls vs Blue Ballers <br />{" "}
                    Redskins vs Miami Vice
                  </td>
                  <td>
                    25-39
                    <br /> 59-26 <br /> 46-78
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
