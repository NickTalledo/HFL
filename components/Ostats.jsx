"use client";

import { useState, useEffect } from "react";

const Ostats = ({ oStats }) => {
  const [sortKey, setSortKey] = useState(null);
  const [sortOrder, setSortOrder] = useState(1);

  const sortedStats = [...oStats].sort((a, b) => {
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
              <button onClick={() => handleSort("receptions")}>
                Receptions{" "}
                {sortKey === "receptions" && (sortOrder === 1 ? "↓" : "↑")}
              </button>
            </th>
            <th>
              <button onClick={() => handleSort("yards")}>
                Yards {sortKey === "yards" && (sortOrder === 1 ? "↓" : "↑")}
              </button>
            </th>
            <th>
              <button onClick={() => handleSort("touchdowns")}>
                Touchdowns{" "}
                {sortKey === "touchdowns" && (sortOrder === 1 ? "↓" : "↑")}
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedStats.map(
            ({ team, player, receptions, yards, touchdowns }) => {
              return (
                <tr>
                  <td>{team}</td>
                  <td>{player}</td>
                  <td>{receptions}</td>
                  <td>{yards}</td>
                  <td>{touchdowns}</td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Ostats;
