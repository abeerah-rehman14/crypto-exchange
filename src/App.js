import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginUser from './Components/login';
import RegisterUser from './Components/register';
import Layout from './Components/layout';
import ProtectedRoutes from './ProtectedRoutes';
import Dashboard from './Components/dashboard';
import Transfer from './Components/transfer';
import About from './Components/about';
import Home from './Components/home';
import NotFound from './Components/notFound';
import Blogs from './Components/blogs'
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginUser />} />
        <Route path="/signup" element={<RegisterUser />} />
        <Route path="/main" element={<Layout />}>
            <Route index element={<ProtectedRoutes><Dashboard /></ProtectedRoutes>}></Route>
            <Route path="transferCoin" element = {<ProtectedRoutes><Transfer /></ProtectedRoutes>}></Route>
            <Route path="blogs" element = {<ProtectedRoutes><Blogs /></ProtectedRoutes>}></Route>
            <Route path="about" element = {<ProtectedRoutes><About /></ProtectedRoutes>}></Route>
            <Route path="home" element = {<ProtectedRoutes><Home /></ProtectedRoutes>}></Route>
          {/* <Route element={<ProtectedRoutes/>}>
            <Route path="dashboard" element={<Dashboard/>}></Route>
            <Route path="transferCoin" element = {<Transfer/>}></Route>
            <Route path="blogs" element = {<Blogs/>}></Route>
            <Route path="about" element = {<About/>}></Route>
            <Route path="home" element = {<Home/>}></Route>
          </Route> */}
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

//<Route path="lazyloading" element={<ProtectedRoute><LazyLoading /></ProtectedRoute>} />