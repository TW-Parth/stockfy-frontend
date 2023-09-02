import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './container/home/Homepage';
import Login from './container/auth/Login';

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/login" Component={Login} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
