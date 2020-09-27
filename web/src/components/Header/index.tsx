import React from "react";
import { Link } from "react-router-dom";

import backArrowIcon from "../../assets/images/test/back-arrow.png";

import "./styles.css";

interface HeaderProps {
  turnBack: boolean;
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <div
          className={
            props.turnBack === true ? "navbar-logo flex-center" : "navbar-logo"
          }
        >
          {props.turnBack === true && (
            <Link to="/" id="back-arrow">
              <img src={backArrowIcon} alt="back arrow" />
            </Link>
          )}
          <Link className="navbar-link-item" to="/">
            RAGNAROK
          </Link>
        </div>
        <div className="navbar-link">
          <Link className="navbar-link-item" to="/games">
            GAMES
          </Link>

          <Link className="navbar-link-item" to="/store">
            STORE
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
