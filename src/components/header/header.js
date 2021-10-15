import React from "react";
import { Link } from "react-router-dom";
import { FaCrown } from "react-icons/fa";
import { navItem } from "../../utils/constant";
import './header.scss';

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="header-icon">
        <FaCrown size={40} />
      </Link>
      <div className="navigation-container">
        {navItem.map(({ linkUrl }, idx) => {
          return (
            <Link key={idx} to={`/${linkUrl.toLowerCase()}`} className="navigation-link">
              {linkUrl}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
