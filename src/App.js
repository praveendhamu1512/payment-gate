import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registration from "./components/registration/Registration";
import Login from './components/login/Login';
import ResetPassword from "./components/ResetPassword/ResetPassword";
import ForgotPassword from './components/forgotpassword/ForgotPassword.jsx';
import Team from "./components/navbar/pages/Team";
import './App.css';
import Dashboard from './components/navbar/pages/dashboard/Dashboard';
import Transaction from './components/navbar/pages/transction/Transaction';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/navbar/Sidebar';

function App() {
  return (
    <BrowserRouter>
      <div className="">
        <div className="">
          
        </div>
      </div>
      <Routes className="">
        <Route path="/" element={<Login/>}></Route>
        <Route path="/registration" element={<Registration/>}></Route>
        <Route path="/forgotpassword" element={<ForgotPassword/>}></Route>
        <Route path="/resetpassword" element={<ResetPassword/>}></Route>
        <Route path="navbar" element={<Navbar/>}></Route>
        <Route path="Sidebar" element={<Sidebar/>}></Route>
        <Route path="Team" element={<Team/>}></Route>
        <Route path="dashboard" element={<Dashboard/>}></Route>
        <Route path="trans" element={<Transaction/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
