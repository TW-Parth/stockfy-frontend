import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../../services/auth/auth.services';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav className="navbar main-sidebar">
        <div className="navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" to="/dashboard">
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard/profile">
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard/settings">
                Settings
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard/subscription">
                Subscription
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="bottom-menu">
        <button type="button" className="btn btn-outline-primary w-100" onClick={logout}>
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
