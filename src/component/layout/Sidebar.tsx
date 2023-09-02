import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/dashboard/profile">Profile</Link>
      <Link to="/dashboard/settings">Settings</Link>
    </div>
  );
};

export default Sidebar;
