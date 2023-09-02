import ImgLogo from '../../assets/images/logo.svg';
import { LOCAL_STORAGE_KEYS } from "../../helpers/constant";

const userData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.USER))
const Header = () => {
  return (
    <div className="header">
      <div className="container-fluid">
        <nav className="navbar">
          <a className="navbar-brand" href="index.html">
            <img src={ImgLogo} alt="" />
          </a>
          {localStorage.getItem(LOCAL_STORAGE_KEYS.USER) && <div className="h-right">
            <p>{userData?.firstName} {userData?.lastName}</p>
          </div>}
        </nav>
      </div>
    </div>
  );
};

export default Header;
