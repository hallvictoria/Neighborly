import React from 'react';
import { Link } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu';
import './sidebar.css';

export default props => {
  return (
    <Menu>
        <Link to="/" className="menu-item">
            Dashboard
        </Link>
        <Link to="/profile" className="menu-item">
            Profile
        </Link>
        <Link to="/contacts" className="menu-item">
            Contacts
        </Link>
        <Link to="/leaderboard" className="menu-item">
            Leaderboard
        </Link>
        <Link to="/challenges" className="menu-item">
            Challenges
        </Link>
        <Link to="/rewards" className="menu-item">
            Rewards
        </Link>
    </Menu>
  );
};