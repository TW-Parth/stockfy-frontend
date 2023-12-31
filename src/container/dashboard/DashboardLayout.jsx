import { Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from './index';
import DashboardLayoutComponent from '../../component/layout/DashboardLayoutComponent';
import Profile from './Profile';
import Settings from './Settings';
import Subscription from './Subscription';

const DashBoardLayout = () => {
  return (
    <DashboardLayoutComponent>
      <div className="dashboard-content">
        <Routes>
          <Route path="/" Component={Dashboard} />
          <Route path="/profile" Component={Profile} />
          <Route path="/settings" Component={Settings} />
          <Route path="/subscription" Component={Subscription} />
          <Route path="/*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </div>
    </DashboardLayoutComponent>
  );
};

export default DashBoardLayout;
