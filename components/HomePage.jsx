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
              Wrapping up Week 1, it was an exciting day for flag football
              enthusiasts, with high scoring matches that kept everyone on the
              edge of their seats. The Redskins emerged victorious against the
              Bulls in a thrilling 71-50 finish. Their balanced team
              performance, with everyone giving their best, made a remarkable
              difference on the field. <br /> <br />
              Meanwhile, The Clan outplayed the Blue Ballers 47-34, thanks to
              Matt Rossi&apos;s spectacular performance. Rossi racked up an
              impressive 184 yards and five touchdowns, truly dominating the
              field. <br /> <br />
              The day ended with Miami Vice outclassing the Bomb Squad 64-36 in
              a game that started off slow but soon erupted into a high scoring
              affair. It was Miami Vice&apos;s Nick Cupelli, who broke through
              with an impressive 86 rushing yards and three rushing touchdowns.
              Despite the Bomb Squad&apos;s notable efforts, including standout
              performances from Justin Kotowitz and Edin Hernandez, they
              couldn&apos;t clinch the win. All in all, it was a day of intense
              competition, unexpected turns, and commendable sportsmanship.
              Let&apos;s kick off Week 2!
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
                    <td>1-0</td>
                    <td>64</td>
                    <td>36</td>
                  </tr>
                  <tr>
                    <td>Redskins</td>
                    <td>1-0</td>
                    <td>71</td>
                    <td>50</td>
                  </tr>
                  <tr>
                    <td>The Clan</td>
                    <td>1-0</td>
                    <td>47</td>
                    <td>34</td>
                  </tr>
                  <tr>
                    <td>Bulls</td>
                    <td>0-1</td>
                    <td>50</td>
                    <td>71</td>
                  </tr>
                  <tr>
                    <td>Blue Ballers</td>
                    <td>0-1</td>
                    <td>34</td>
                    <td>47</td>
                  </tr>
                  <tr>
                    <td>Bomb Squad</td>
                    <td>0-1</td>
                    <td>36</td>
                    <td>64</td>
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
                    TBD <br /> TBD <br /> TBD
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
