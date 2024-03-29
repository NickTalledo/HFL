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
              The championship has concluded with an exciting showdown between
              The Clan and the Bulls. Despite the challenging weather
              conditions, the championship game was truly memorable. In the end,
              the Bulls emerged victorious, claiming the title of champions!
              Redbull&apos;s outstanding performance on offense, including 5
              rushing touchdowns, played a pivotal role in their success. The
              final score stood at 56-44 in favor of the Bulls.
              <br />
              <br />
              Rumors have circulated suggesting that Andrew Rossi&apos;s
              performance may have contributed to The Clan&apos;s loss,
              disappointing their team multiple times throughout the game. With
              the summer season coming to an end, anticipation builds for the
              upcoming Fall season.
              <br />
              <br />A heartfelt congratulations to the Bulls for their
              remarkable achievement as the 2023 Summer HFL Champions! Their
              hard work, determination, and exceptional teamwork have led them
              to this well-deserved victory. Here&apos;s to an exciting Fall
              season ahead!
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
                    <td>7-2</td>
                    <td>429</td>
                    <td>405</td>
                  </tr>
                  <tr>
                    <td>Miami Vice</td>
                    <td>6-3</td>
                    <td>568</td>
                    <td>485</td>
                  </tr>
                  <tr>
                    <td>Bulls</td>
                    <td>5-3-1</td>
                    <td>419</td>
                    <td>366</td>
                  </tr>
                  <tr>
                    <td>Blue Ballers</td>
                    <td>4-5</td>
                    <td>424</td>
                    <td>445</td>
                  </tr>
                  <tr>
                    <td>Bomb Squad</td>
                    <td>3-5-1</td>
                    <td>364</td>
                    <td>409</td>
                  </tr>
                  <tr>
                    <td>Redskins</td>
                    <td>2-7</td>
                    <td>426</td>
                    <td>520</td>
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
                    43-58 <br /> 60-55 <br /> 0-0
                  </td>
                </tr>
                <tr>
                  <td>Playoffs 1</td>
                  <td>
                    The Clan <br /> Bulls vs Miami Vice
                    <br /> Bomb Squad vs Blue Ballers
                  </td>
                  <td>
                    BYE <br /> 73-53 <br /> 0-DQ
                  </td>
                </tr>
                <tr>
                  <td>Playoffs 2</td>
                  <td>
                    The Clan vs Bomb Squad <br /> Bulls
                  </td>
                  <td>
                    34-31 <br /> BYE
                  </td>
                </tr>
                <tr>
                  <td>Championship</td>
                  <td>The Clan vs Bulls</td>
                  <td>
                    44-56 <br />
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
