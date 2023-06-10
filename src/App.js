import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import React, { useState, useEffect } from "react";
import BaseComponent from './Components/baseComponent';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import RegisterUser from './Components/register';
import Blogs from './Components/blogs'
import Dashboard  from './Components/dashboard';
import LoginUser from './Components/login';
import About from './Components/about';
import Home from './Components/home';
import Transfer from './Components/transfer';
import { ToastContainer } from 'react-toastify';
import { fetchUserData } from './reduxToolkit/userReducer';
import {useSelector,useDispatch} from 'react-redux'



function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element = {<LoginUser/>}></Route>
        <Route path="/signup" element = {<RegisterUser/>}></Route>
        <Route path="/dashboard" element = {<Dashboard/>}></Route>
        <Route path="/transferCoin" element = {<Transfer/>}></Route>
        <Route path="/blogs" element = {<Blogs/>}></Route>
        <Route path="/about" element = {<About/>}></Route>
        <Route path="/home" element = {<Home/>}></Route>
      </Routes>
      <ToastContainer />
      {/* <BaseComponent/>  */}

      
      
      
     </div>
  );
}

export default App;
