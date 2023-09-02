import ImgLogo from "../../assets/images/logo.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="container-fluid">
        <nav className="navbar">
          <a className="navbar-brand" href="index.html">
            <img src={ImgLogo} alt="" />
          </a>
          <div className="h-right">
            <ul className="navbar-nav">
              <li className="nav-item pro-account">
                <a className="nav-link" href="/">
                  User
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
