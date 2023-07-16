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
              Week 8 marked an intense stage in our league, leading us into the
              final week before playoffs. The Clan emerged victorious in a close
              battle against the struggling Blue Ballers, with a final score of
              52-48. Despite a last-second touchdown by the Blue Ballers, they
              were unable to seal the deal, extending their losing streak to
              four games.
              <br /> <br />
              The Bomb Squad showcased their growing momentum by securing their
              second consecutive win against the Redskins. Unfortunately, the
              game ended early due to the Redskins&apos; quarterback suffering
              an ankle injury before halftime, resulting in a final score of
              34-18 in favor of the Bomb Squad.
              <br /> <br />
              The matchup between Miami Vice and the Bulls turned into a
              high-scoring shootout. In the end, the Bulls managed to secure the
              win with a score of 70-65, displaying their resilience and
              offensive prowess. As we head into the final week before playoffs,
              the competition intensifies, and teams strive to secure their
              spots in the postseason. Stay tuned for the exciting matchups and
              decisive moments that await us in Week 9!
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
                    <td>6-2</td>
                    <td>513</td>
                    <td>425</td>
                  </tr>
                  <tr>
                    <td>The Clan</td>
                    <td>6-2</td>
                    <td>369</td>
                    <td>350</td>
                  </tr>
                  <tr>
                    <td>Bulls</td>
                    <td>5-3</td>
                    <td>419</td>
                    <td>366</td>
                  </tr>
                  <tr>
                    <td>Blue Ballers</td>
                    <td>3-5</td>
                    <td>366</td>
                    <td>402</td>
                  </tr>
                  <tr>
                    <td>Bomb Squad</td>
                    <td>3-5</td>
                    <td>364</td>
                    <td>409</td>
                  </tr>
                  <tr>
                    <td>Redskins</td>
                    <td>2-6</td>
                    <td>383</td>
                    <td>462</td>
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
                    Blue Ballers vs Miami Vice <br /> Bomb Squad vs Bulls <br />{" "}
                    Redskins vs The Clan
                  </td>
                  <td>
                    49-68 <br /> 49-55 <br /> 54-45
                  </td>
                </tr>
                <tr>
                  <td>Week 7</td>
                  <td>
                    Blue Ballers vs Bomb Squad <br /> Redskins vs Miami Vice
                    <br /> The Clan vs Bulls
                  </td>
                  <td>
                    51-60 <br /> 81-69 <br /> 48-39
                  </td>
                </tr>
                <tr>
                  <td>Week 8</td>
                  <td>
                    The Clan vs Blue Ballers <br /> Redskins vs Bomb Squad{" "}
                    <br /> Bulls vs Miami Vice
                  </td>
                  <td>
                    52-48 <br /> 34-18 <br /> 70-65
                  </td>
                </tr>
                <tr>
                  <td>Week 9</td>
                  <td>
                    Redskins vs Blue Ballers <br /> The Clan vs Miami Vice{" "}
                    <br /> Bomb Squad vs Bulls
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
