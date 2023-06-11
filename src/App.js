import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import {BrowserRouter as Routes, Route} from 'react-router-dom'
import RegisterUser from './Components/register';
import Blogs from './Components/blogs'
import Dashboard  from './Components/dashboard';
import LoginUser from './Components/login';
import About from './Components/about';
import Home from './Components/home';
import Transfer from './Components/transfer';
import Layout from './Components/layout'
import NotFound from './Components/notFound';
import ProtectedRoutes from './ProtectedRoutes'




function App() {

  return (
    <div className="App">
    <Routes>
    <Route path="/" element = {<LoginUser/>}></Route>
    <Route path="/signup" element = {<RegisterUser/>}></Route>
      <Route path="/" element = {<Layout/>}>

        <Route element={<ProtectedRoutes/>}>
          <Route path="dashboard" element={<Dashboard/>}></Route>
          <Route path="transferCoin" element = {<Transfer/>}></Route>
          <Route path="blogs" element = {<Blogs/>}></Route>
          <Route path="about" element = {<About/>}></Route>
          <Route path="home" element = {<Home/>}></Route>
        </Route>

      </Route>
     <Route path="*" element={<NotFound/>}></Route> 
    </Routes>
    
     </div>
  );
}

export default App;
