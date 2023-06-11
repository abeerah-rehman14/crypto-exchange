import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginUser from './Components/Login';
import RegisterUser from './Components/Register';
import Layout from './Components/Layout';
import ProtectedRoutes from './ProtectedRoutes';
import Dashboard from './Components/Dashboard';
import Transfer from './Components/Transfer';
import About from './Components/About';
import Home from './Components/Home';
import NotFound from './Components/NotFound';
import Blogs from './Components/Blogs'
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginUser />} />
        <Route path="/signup" element={<RegisterUser />} />
        <Route path="/" element={<Layout />}>
          <Route element={<ProtectedRoutes/>}>
            <Route path="dashboard" element={<Dashboard/>}></Route>
            <Route path="transferCoin" element = {<Transfer/>}></Route>
            <Route path="blogs" element = {<Blogs/>}></Route>
            <Route path="about" element = {<About/>}></Route>
            <Route path="home" element = {<Home/>}></Route>
          </Route>
          {/* <Route index element={<ProtectedRoutes />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="transferCoin" element={<Transfer />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="about" element={<About />} />
          <Route path="home" element={<Home />} /> */}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
