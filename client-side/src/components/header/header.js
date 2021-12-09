// @ts-nocheck
import React from "react";
import { Link, withRouter } from "react-router-dom";
import { FaCrown } from "react-icons/fa";
import { navItem } from "../../utils/constant";
import "./header.scss";
import { signOutCustom } from "../firbase/firebase-auth";
import { useSelector } from "react-redux";
import CartIconWithPopUp from "../cart/cart-icon-popup";

const Header = ({ history }) => {
  const currentUser = useSelector((state) => state?.user?.currentUser);
  const handleSignOut = async () => {
    await signOutCustom();
    history.push("/sign-in");
  };

  return (
    <div className="header">
      <Link to="/" className="header-icon">
        <FaCrown size={40} />
      </Link>
      <div className="navigation-container">
        {navItem.map(({ linkUrl }, idx) => {
          return (
            <Link
              key={idx}
              to={`/${linkUrl.toLowerCase()}`}
              className="navigation-link"
            >
              {linkUrl}
            </Link>
          );
        })}
        {currentUser && currentUser.id ? (
          <div onClick={handleSignOut} className="navigation-link">
            Sign-out
          </div>
        ) : (
          <Link key="2" to="/sign-in" className="navigation-link">
            Sign-in
          </Link>
        )}
        <CartIconWithPopUp />
      </div>
    </div>
  );
};

export default withRouter(Header);
