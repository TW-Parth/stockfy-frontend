import { Link } from 'react-router-dom';
import ImgLogo from '../../assets/images/logo.svg';

const HomePage = () => {
  return (
    <>
      <div className="app-wrapper landing-page">
        <div className="app-content">
          <div className="landing-header">
            <div className="container">
              <div className="nav-logo">
                <a className="navbar-brand">
                  <img src={ImgLogo} alt="" />
                </a>
              </div>
            </div>
          </div>

          <div className="landing-banner">
            <div className="container">
              <div className="row align-content-center">
                <div className="col-md-6 col-lg-6">
                  <h1>Hello</h1>
                  <Link to={'/login'}>Login</Link>
                  <br/>
                  <Link to={'/signup'}>Sign Up</Link>
                </div>
                <div className="col-md-6 col-lg-6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
