import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";
import BaseComponent from './Components/baseComponent';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import RegisterUser from './Components/register';
import Dashboard from './Components/dashboard'
import LoginUser from './Components/login';
import About from './Components/about';
import Home from './Components/home';
import { ToastContainer } from 'react-toastify';


function App() {

  const defaultUsers = [
    {
     name: "Abeera Rehman",
     email: "abeerah.rehman@systemsltd.com",
     password: "P@ssw0rd",
     address: "address",
     cnic: "base64"      
    },
    
   
 
  ];
  const [users, setUsers] = useState(defaultUsers);

  const handleAddUser = (newUser) => {
    console.log(newUser)
    setUsers([...users, newUser]);
    //users.push(newUser)
    //setUsers([users]);
    console.log(users)

  };

  const handleDeleteUser = (index) => {
    //users.splice(index,1)

  };

  return (
    <div className="App">
        

  
      <Routes>
        <Route path="/" element = {<LoginUser registeredUsers={users}/>}></Route>
        <Route path="/signup" element = {<RegisterUser addUser = {handleAddUser}/>}></Route>
        <Route path="/dashboard" element = {<Dashboard/>}></Route>
        <Route path="/about" element = {<About/>}></Route>
        <Route path="/home" element = {<Home/>}></Route>
      </Routes>
      <ToastContainer />
      {/* <BaseComponent/>  */}

      
      
      
     </div>
  );
}

export default App;
