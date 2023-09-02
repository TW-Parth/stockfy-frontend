import { Link } from 'react-router-dom';
import ImgLogo from '../../assets/images/logo.svg';
import ImgUser from '../../assets/images/user.svg';

const Banner = () => {
  return (
    <div className="banner-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-6">
            <div className="banner-content">
              <h2>Smarter control over inventory through better demand forecasting </h2>
              <p>Utilize smart cart to streamline inventory management, preventing overstocking and maximizing sales opportunities.</p>
              <button type="button" class="btn btn-primary">
                Book a demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
