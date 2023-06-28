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
              Week 6 of our league brought about unexpected twists and exciting
              matchups. The Blue Ballers, who had been leading by two scores,
              suffered a surprising loss to Miami Vice with a final score of
              49-68. Miami Vice displayed an outstanding offensive performance
              in the second half, showcasing their unstoppable momentum. Their
              offense appears to be in top form and shows no signs of slowing
              down.
              <br /> <br />
              In a game that was initially predicted to be a blowout, the Bomb
              Squad and the Bulls delivered a much closer contest. Despite the
              Bulls&apos; defense having not allowed more than 26 points during
              their winning streak, they conceded 49 points in this matchup.
              However, the Bulls managed to secure three interceptions,
              returning two of them for touchdowns. In the end, the Bulls were
              able to secure the win with a score of 55-49, despite the
              impressive performance by the Bomb Squad.
              <br /> <br />A significant upset unfolded when the bottom-seeded
              Redskins faced off against the top-seeded Clan. The Redskins, with
              a healthy squad, put on an offensive masterclass against The Clan.
              Quarterback Jonny showcased his skill and determination, proving
              that he is far from finished. However, it should be noted that the
              officiating performance by the referees was deemed one of the
              worst in HFL history. The Clan expressed frustration over some
              calls that did not go their way, which may have impacted the game.
              Regardless, the Redskins emerged victorious with a score of 54-45.
              Week 6 certainly delivered surprises and intense matchups, setting
              the stage for a thrilling Week 7. Stay tuned as the league
              continues to unfold with more exciting games and unexpected
              outcomes!
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
                    <td>4-2</td>
                    <td>367</td>
                    <td>286</td>
                  </tr>
                  <tr>
                    <td>Bulls</td>
                    <td>4-2</td>
                    <td>312</td>
                    <td>253</td>
                  </tr>
                  <tr>
                    <td>The Clan</td>
                    <td>4-2</td>
                    <td>269</td>
                    <td>263</td>
                  </tr>
                  <tr>
                    <td>Blue Ballers</td>
                    <td>3-3</td>
                    <td>312</td>
                    <td>244</td>
                  </tr>
                  <tr>
                    <td>Redskins</td>
                    <td>2-4</td>
                    <td>295</td>
                    <td>348</td>
                  </tr>
                  <tr>
                    <td>Bomb Squad</td>
                    <td>1-5</td>
                    <td>270</td>
                    <td>340</td>
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
                    TBD <br /> TBD <br /> TBD
                  </td>
                </tr>
                <tr>
                  <td>Week 8</td>
                  <td>
                    Redskins vs Blue Ballers <br /> The Clan vs Miami Vice{" "}
                    <br /> Bulls vs Bomb Squad
                  </td>
                  <td>
                    TBD <br /> TBD <br /> TBD
                  </td>
                </tr>
                <tr>
                  <td>Week 9</td>
                  <td>
                    Redskins vs Bomb Squad <br /> The Clan vs Blue Ballers{" "}
                    <br /> Miami Vice vs Bulls
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
