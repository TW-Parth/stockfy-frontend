import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from './container/home/Homepage';
import Login from './container/auth/Login';
import DashBoardLayout from './container/dashboard/DashboardLayout';

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard/*" element={<DashBoardLayout />} />
        <Route path="/*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
