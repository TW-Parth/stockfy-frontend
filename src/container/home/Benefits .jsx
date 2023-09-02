import ImgBenefits from '../../assets/images/benefits.jpg';

const Benefits = () => {
  return (
    <div className="benefits-section">
      <div className="container">
        <div className="row align-items-center">
          <h2 className="text-center mb-3">Benefits </h2>
          <div className="col-md-6 col-lg-6">
            <div className="Benefits-img">
              <img src={ImgBenefits} alt="" />
            </div>
          </div>
          <div className="col-md-6 col-lg-6">
            <div className="Benefits-detail">
              <h3>Demand Forecasting</h3>
              <ul className="mb-4">
                <li>Demand forecasting involves using current data, market demands, and techniques to predict future customer demand for products.</li>
              </ul>

              <h3>Inventory Optimization</h3>
              <ul className="mb-4">
                <li>Inventory optimization aims to strike a balance between having enough stock to meet customer demand and minimizing excess inventory.</li>
              </ul>
              <p></p>

              <h3>Maximize Profit & Minimize Loss</h3>
              <ul className="mb-4">
                <li>
                  Inventory optimization will lead to making better decisions on finalizing the inventory levels and as result it will help you not miss an opportunity to sell more
                  when there is a demand and similarly not loss money by piling up stocks when there is no enough demand.
                </li>
              </ul>

              <h3>Mobile Accessibility</h3>
              <ul className="mb-4">
                <li>Access the software from anywhere, using mobile devices, and receive alerts to make decisions on the go. </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
