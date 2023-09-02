import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Login from './container/auth/Login';
import Signup from './container/auth/Signup';
import DashBoardLayout from './container/dashboard/DashboardLayout';
import HomePage from './container/home/Homepage';
import { LOCAL_STORAGE_KEYS } from './helpers/constant';

const PublicRoutes = ({ children }) => {
  if (localStorage.getItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN) === null) {
    return children;
  }
  return <Navigate to="/dashboard" replace />;
};

const PrivateRoutes = ({ children }) => {
  if (localStorage.getItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN) !== null) {
    return children;
  }
  return <Navigate to="/" replace />;
};

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<PublicRoutes><HomePage /></PublicRoutes>} />
          <Route
            path="/login"
            element={
              <PublicRoutes>
                <Login />
              </PublicRoutes>
            }
          />
          <Route
            path="/dashboard/*"
            element={
              <PrivateRoutes>
                <DashBoardLayout />
              </PrivateRoutes>
            }
          />
          <Route path="/*" element={<Navigate to="/" replace />} />
          <Route path="/signup" element={<PublicRoutes><Signup /></PublicRoutes>} />
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
