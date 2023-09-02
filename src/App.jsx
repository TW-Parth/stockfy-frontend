import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from './container/home/Homepage';
import Login from './container/auth/Login';
import Signup from './container/auth/Signup';
import { LOCAL_STORAGE_KEYS } from './helpers/contant';
import DashboardLayoutComponent from './component/layout/DashboardLayoutComponent';

const PublicRoutes = ({children}) => {
  if(localStorage.getItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN) === null){
    return children;
  }
  return <Navigate to="/dashboard" replace />
}

const PrivateRoutes = ({children}) => {
  if(localStorage.getItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN) !== null){
    return children;
  }
  return <Navigate to="/" replace />
}

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<PublicRoutes><Login /></PublicRoutes>} />
        <Route path="/dashboard/*" element={<PrivateRoutes><DashboardLayoutComponent /></PrivateRoutes>} />
        <Route path="/*" element={<Navigate to="/" replace />} />
        <Route path="/signup" Component={Signup} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
