const Sidebar = () => {
  return (
    <div className="Login-Container">
      <div className="sidebar">
        <nav className="navbar main-sidebar">
          <Link legacyBehavior href="/">
            <a className="navbar-brand">
              <AppAssetImage urls={{ svg: '/images/logo.svg' }} width={76} height={18} alt="logo" />
            </a>
          </Link>
          <div className="navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  <span className="nav-link-icon">
                    <IconDashboard />
                  </span>
                  <span className="nav-link-label">Dashboard</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  <span className="nav-link-icon">
                    <IconBusiness />
                  </span>
                  <span className="nav-link-label">Business Diagnostic</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  <span className="nav-link-icon">
                    <IconRetrospective />
                  </span>
                  <span className="nav-link-label">Performance Retrospective</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  <span className="nav-link-icon">
                    <IconMarketingAgenda />
                  </span>
                  <span className="nav-link-label">Marketing Agenda</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
