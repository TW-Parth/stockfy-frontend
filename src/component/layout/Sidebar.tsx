import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { logout } from '../../services/auth/auth.services';

const Sidebar = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const logoutHandler = async () => {
    try{
      await logout();
      localStorage.clear();
      navigate('/');
    }catch(e){
      console.log(e);
    }
  };

  return (
    <div className="sidebar">
      <nav className="navbar main-sidebar">
        <div className="navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/dashboard' ? 'active' : ''}`} to="/dashboard">
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/dashboard/profile' ? 'active' : ''}`} to="/dashboard/profile">
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/dashboard/settings' ? 'active' : ''}`} to="/dashboard/settings">
                Settings
              </Link>
            </li>
            <li className={`nav-item ${location.pathname === '/dashboard/subscription' ? 'active' : ''}`}>
              <Link className="nav-link" to="/dashboard/subscription">
                Subscription
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="bottom-menu">
        <button type="button" className="btn btn-outline-primary w-100" onClick={logoutHandler}>
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
