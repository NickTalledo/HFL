"use client";

const Header = () => {
  return (
    <div className="topnav">
      <a className="active" href="/homepage">
        Home
      </a>
      <a href="/offense">Offensive Stats</a>
      <a href="/defense">Defensive Stats</a>
      <a href="/about">About</a>
    </div>
  );
};

export default Header;
