"use client";

import { useState } from "react";

const Qbstats = ({ qbStats }) => {
  const [sortKey, setSortKey] = useState(null);
  const [sortOrder, setSortOrder] = useState(1);

  const sortedStats = [...qbStats].sort((a, b) => {
    if (sortKey == null) return 0;
    return (a[sortKey] - b[sortKey]) * sortOrder;
  });

  const handleSort = (key) => {
    if (key === sortKey) {
      setSortOrder(sortOrder * -1);
    } else {
      setSortKey(key);
      setSortOrder(1);
    }
  };
  return (
    <div className="table2-container">
      <table className="table2">
        <thead>
          <tr>
            <th>Team</th>
            <th>Player</th>
            <th>
              <button onClick={() => handleSort("completions")}>
                Comps{" "}
                {sortKey === "completions" && (sortOrder === 1 ? "↓" : "↑")}
              </button>
            </th>
            <th>
              <button onClick={() => handleSort("Ryards")}>
                Rushing Yards{" "}
                {sortKey === "Ryards" && (sortOrder === 1 ? "↓" : "↑")}
              </button>
            </th>
            <th>
              <button onClick={() => handleSort("Pyards")}>
                Passing Yards{" "}
                {sortKey === "Pyards" && (sortOrder === 1 ? "↓" : "↑")}
              </button>
            </th>
            <th>
              <button onClick={() => handleSort("picks")}>
                Picks {sortKey === "picks" && (sortOrder === 1 ? "↓" : "↑")}
              </button>
            </th>
            <th>
              <button onClick={() => handleSort("Rtouchdowns")}>
                Rushing TDs{" "}
                {sortKey === "Rtouchdowns" && (sortOrder === 1 ? "↓" : "↑")}
              </button>
            </th>
            <th>
              <button onClick={() => handleSort("Ptouchdowns")}>
                Passing TDs{" "}
                {sortKey === "Ptouchdowns" && (sortOrder === 1 ? "↓" : "↑")}
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedStats.map(
            ({
              team,
              player,
              completions,
              Ryards,
              Pyards,
              picks,
              Rtouchdowns,
              Ptouchdowns,
            }) => {
              return (
                <tr key={player}>
                  <td>{team}</td>
                  <td>{player}</td>
                  <td>{completions}</td>
                  <td>{Ryards}</td>
                  <td>{Pyards}</td>
                  <td>{picks}</td>
                  <td>{Rtouchdowns}</td>
                  <td>{Ptouchdowns}</td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Qbstats;
