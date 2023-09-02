const Contact = () => {
  return (
    <div className="contact-section">
      <div className="container">
        <div className="contact-inner">
          <h2 className="text-center">Contact Us</h2>
          <p className="text-center">Got a project in mind? Share the details of your project.</p>
          <form>
            <div className="row">
              <div className="col-md-6 col-lg-6">
                <div className="row">
                  <div className="col-md-6 col-lg-6">
                    <div className="form-group">
                      <label className="form-label">First Name</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6">
                    <div className="form-group">
                      <label className="form-label">Last Name</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" />
                </div>

                <div className="form-group">
                  <label className="form-label">Number</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="col-md-6 col-lg-6">
                <div className="form-group">
                  <label className="form-label">Number</label>
                  <select class="form-select">
                    <option selected>Country</option>
                    <option value="1">US</option>
                    <option value="2">UK</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Messages</label>
                  <textarea className="form-control" rows="6"></textarea>
                </div>
              </div>
              <div className="col-md-12">
                <button type="button" class="btn btn-primary">
                  Enquire Now
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
