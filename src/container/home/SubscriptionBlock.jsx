import Imgsub from '../../assets/images/subscription.svg';

const SubscriptionBlock = () => {
  return (
    <div className="subscription-section">
      <div className="container">
        <div className="card subscription-card">
          <div className="row align-items-center">
            <div className="col-md-4 col-lg-4">
              <div className="sub-img">
                <img src={Imgsub} alt="" />
              </div>
            </div>
            <div className="col-md-4 col-lg-4">
              <div className="sub-detail">
                <h3>One for all</h3>
                <p>No Matter you are Big or Small a single subscription works for all.</p>
                <p>Pay Yearly For 25% Off </p>
              </div>
            </div>
            <div className="col-md-4 col-lg-4">
              <div className="sub-price">
                <h3>
                  $40 <small>/ Month</small>
                </h3>
                <button type="button" class="btn btn-secondary mb-3">
                  Subscribe
                </button>
                <a href="/" className="d-block text-white">
                  Switch to Yearly
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionBlock;
