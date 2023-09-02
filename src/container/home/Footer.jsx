import ImgLogo from '../../assets/images/logo.svg';
import { IconFacebook, IconInsta, IconLinked, IconTwitter } from '../../component/global/Icons';

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-lg-4">
            <div className="f-about">
              <div className="f-logo">
                <a href="">
                  <img src={ImgLogo} alt="" />
                </a>
              </div>

              <div className="f-social">
                <ul className="list-unstyled">
                  <li>
                    <a href="/">
                      <IconFacebook />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <IconTwitter />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <IconLinked />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <IconInsta />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-4">
            <div className="f-menu">
              <h5>Company</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="/">About Us</a>
                </li>
                <li>
                  <a href="/">Features</a>
                </li>
                <li>
                  <a href="/">Blog</a>
                </li>
                <li>
                  <a href="/">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 col-lg-4">
            <div className="f-menu">
              <h5>Get Help</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="/">Chat </a>
                </li>
                <li>
                  <a href="/">Site Map</a>
                </li>
                <li>
                  <a href="/">FAQs</a>
                </li>
                <li>
                  <a href="/">Support</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
