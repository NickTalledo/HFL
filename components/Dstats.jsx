"use client";

import { useState } from "react";

const Dstats = ({ dStats }) => {
  const [sortKey, setSortKey] = useState(null);
  const [sortOrder, setSortOrder] = useState(1);

  const sortedStats = [...dStats].sort((a, b) => {
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
              <button onClick={() => handleSort("sacks")}>
                Sacks {sortKey === "sacks" && (sortOrder === 1 ? "↓" : "↑")}
              </button>
            </th>
            <th>
              <button onClick={() => handleSort("tackles")}>
                Tackles {sortKey === "tackles" && (sortOrder === 1 ? "↓" : "↑")}
              </button>
            </th>
            <th>
              <button onClick={() => handleSort("picks")}>
                Picks {sortKey === "picks" && (sortOrder === 1 ? "↓" : "↑")}
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedStats.map(({ team, player, sacks, tackles, picks }) => {
            return (
              <tr key={player}>
                <td>{team}</td>
                <td>{player}</td>
                <td>{sacks}</td>
                <td>{tackles}</td>
                <td>{picks}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Dstats;
