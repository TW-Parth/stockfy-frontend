import { Link } from 'react-router-dom';
import ImgLogo from '../../assets/images/logo.svg';
import ImgUser from '../../assets/images/user.svg';
import { LOCAL_STORAGE_KEYS } from '../../helpers/constant';

const Header = () => {
  return (
    <div className="header">
      <div className="container-fluid">
        <nav className="navbar">
          <a className="navbar-brand" href="index.html">
            <img src={ImgLogo} alt="" />
          </a>
          {/* {localStorage.getItem(LOCAL_STORAGE_KEYS.USER) && <div className="h-right">
            <p>{userData?.firstName} {userData?.lastName}</p>
          </div>} */}

          <div className="h-right">
            <ul className="navbar-nav">
              <li className="nav-item user-account">
                <Link className="nav-link" to={'/login'}>
                  <img src={ImgUser} alt="" />
                </Link>
                {/* <a className="nav-link" href="/">
                  <img src={ImgUser} alt="" />
                </a> */}
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
