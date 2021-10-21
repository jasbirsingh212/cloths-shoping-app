import React from "react";
import { Link } from "react-router-dom";
import { FaCrown } from "react-icons/fa";
import { navItem } from "../../utils/constant";
import "./header.scss";
import { signOutCustom } from "../firbase/firebase-auth";
import { connect } from 'react-redux';

const Header = ({ currentUser }) => {
  const handleSignOut = () => {
    signOutCustom();
  }

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
        {
          currentUser && currentUser.id ? ( <div onClick={handleSignOut} className='navigation-link' >Sign-out</div> ) :
          <Link
          key='2'
          to='/sign-in'
          className="navigation-link"
          >
              Sign-in
            </Link>
        }
      </div>
    </div>
  );
};

const mapStateToProps = ({user:{ currentUser } }) =>  {


  return {
   currentUser,
  }

}


export default connect(mapStateToProps)(Header);
