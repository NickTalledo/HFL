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
              Week 2 down, The Clan triumphed over Bomb Squad in a thrilling
              match, ending with a score of 64-51. The game was a nail-biter,
              with both teams showcasing their skills and scoring drive after
              drive. The decisive moment came when Andrew Rossi intercepted a
              pass, scoring a pick-six and securing the victory for The Clan.
              Although Bomb Squad showed remarkable improvement from last week,
              they were unable to overcome the now undefeated Clan. <br />
              <br /> In a stunning upset, the Blue Ballers defeated the
              top-ranked team, the Redskins, with a score of 52-38. Their
              defense proved to be air tight, holding the previous week&apos;s
              highest-scoring team to become the lowest-scoring this week.{" "}
              <br /> <br />
              Another undefeated team emerged as Miami Vice secured a win
              against the Bulls, with a final score of 61-52. Sergio had a
              breakout game, amassing an impressive 144 yards and 3 touchdowns
              on offense, and adding a late-game pick-six to seal the victory.
              Although having a spectacular game, Nick Cupelli unfortunately
              suffered an injury towards the end of the game, but Perlongo was
              able to step up as temporary quarterback and ensured the win. Time
              to see what week 3 holds!
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
                    <td>Miami Vice</td>
                    <td>2-0</td>
                    <td>125</td>
                    <td>88</td>
                  </tr>
                  <tr>
                    <td>The Clan</td>
                    <td>2-0</td>
                    <td>111</td>
                    <td>85</td>
                  </tr>
                  <tr>
                    <td>Redskins</td>
                    <td>1-1</td>
                    <td>109</td>
                    <td>103</td>
                  </tr>
                  <tr>
                    <td>Blue Ballers</td>
                    <td>1-1</td>
                    <td>86</td>
                    <td>85</td>
                  </tr>
                  <tr>
                    <td>Bulls</td>
                    <td>0-2</td>
                    <td>104</td>
                    <td>132</td>
                  </tr>
                  <tr>
                    <td>Bomb Squad</td>
                    <td>0-2</td>
                    <td>87</td>
                    <td>128</td>
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
                    Blue Ballers vs Bomb Squad <br /> Bulls vs The Clan <br />{" "}
                    Miami Vice vs Redskins
                  </td>
                  <td>
                    TBD <br /> TBD <br /> TBD
                  </td>
                </tr>
                <tr>
                  <td>Week 4</td>
                  <td>
                    Bomb Squad vs Redskins <br /> Bulls vs Blue Ballers <br />{" "}
                    Miami Vice vs The Clan
                  </td>
                  <td>
                    TBD <br /> TBD <br /> TBD
                  </td>
                </tr>
                <tr>
                  <td>Week 5</td>
                  <td>
                    Bulls vs Bomb Squad <br /> Redskins vs The Clan <br /> Miami
                    Vice vs Blue Ballers
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
