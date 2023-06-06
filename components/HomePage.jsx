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
              BREAKING NEWS: Our first trade of the season has been made! After
              some inner disputes, Nick Talledo has been traded to the Bomb
              Squad! The Blue Ballers will receive Andrew Aspromonte. Many are
              saying this trade is a huge win for Bomb Squad while Blue Ballers
              got the short end of the stick. We asked some players their views
              on this, here are their responses:
              <br /> "Listen, at a point, enough is enough. I&apos;m sick of
              playing with mediocrity" - Nick Talledo
              <br />
              "He just isn&apos;t a team player anymore, we had to get rid of
              him" - Nicky
              <br />
              "Get that camera out of my f**king face" - Josh Soler
              <br />
              "Let&apos;s f**king gooo" - Stephen Aspromonte
              <br />
              "Wait what&apos;s happening?" - Andrew Aspromonte
              <br /> <br />
              Welcome to Week 3 of our league! The excitement continues as the
              Blue Ballers pulled off another stunning victory, defeating Miami
              Vice with a close score of 50-44. Once again, they managed to
              topple the number 1 ranked team. Josh Soler was in exceptional
              form, accumulating an impressive 4 sacks throughout the game. This
              match marked the first game of the season to go into overtime,
              adding an extra level of intensity.
              <br /> <br />
              In another remarkable turn of events, the Bulls dominated The
              Clan, winning with a commanding score of 47-21. Despite initially
              being up 14-0, The Clan struggled to score for the remainder of
              the game, thanks to the Bulls&apos;s formidable defense.
              <br /> <br />
              The Bomb Squad also emerged victorious in a high-scoring shootout
              against the Redskins, triumphing with a final score of 75-62.
              Stephen Aspromonte delivered a remarkable performance, throwing
              for 364 yards, rushing for 71, and impressively avoiding any
              interceptions. The Redskins found it challenging to halt the Bomb
              Squad&apos;s relentless offense. With Week 3 in the books,
              let&apos;s eagerly await the thrills and surprises that Week 4 has
              in store for us!
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
                    <td>2-1</td>
                    <td>169</td>
                    <td>138</td>
                  </tr>
                  <tr>
                    <td>Blue Ballers</td>
                    <td>2-1</td>
                    <td>136</td>
                    <td>129</td>
                  </tr>
                  <tr>
                    <td>The Clan</td>
                    <td>2-1</td>
                    <td>132</td>
                    <td>132</td>
                  </tr>
                  <tr>
                    <td>Bulls</td>
                    <td>1-2</td>
                    <td>151</td>
                    <td>153</td>
                  </tr>
                  <tr>
                    <td>Redskins</td>
                    <td>1-2</td>
                    <td>171</td>
                    <td>178</td>
                  </tr>
                  <tr>
                    <td>Bomb Squad</td>
                    <td>1-2</td>
                    <td>162</td>
                    <td>190</td>
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
