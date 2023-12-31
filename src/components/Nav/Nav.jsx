import "./nav.scss";
import { useState } from "react";

export const Nav = (props) => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header>
      <div
        className={`${navOpen ? "overlay" : ""}`}
        onClick={() => setNavOpen(false)}
      ></div>
      <nav className="nav">
        <div className="navContent">
          <a href="/">{props.logo}</a>
          <ul
            className={`${
              navOpen ? "list list-mobile-open" : "list list-mobile-closed"
            }`}
          >
            {props.requestInviteButton}
            <li className="list-element">Home</li>
            <li className="list-element">About</li>
            <li className="list-element">Contact</li>
          </ul>
          <button
            className="hamburgerButton"
            onClick={() => setNavOpen(!navOpen)}
          >
            <span className="menuBar first"></span>
            <span className="menuBar"></span>
            <span className="menuBar last"></span>
          </button>

          {props.requestInviteButton}
        </div>
      </nav>
    </header>
  );
};
