import RegisterUser from './register';
import LoginUser from './login';
import React, { useState } from "react";


function BaseComponent() {

    // const registeredUsers = [
    //     {
    //      name: "Abeera Rehman",
    //      email: "abeerah.rehman@systemsltd.com",
    //      password: "Passw0rd",
    //      address: "address",
    //      cnic: "base64"      
    //     },
        
       
     
    //   ];
    //   const [users, setUsers] = useState(registeredUsers);
    
    //   const handleAddUser = (newUser) => {
    //     console.log(newUser)
    //     setUsers([...users, newUser]);
    //     console.log(users)

    //   };

    //   const handleDeleteUser = (index) => {
    //     registeredUsers.splice(index,1)

    //   };


  return (
    <div className="BaseComponent">
      {/* <LoginUser registeredUsers = {registeredUsers}
      /> */}
    </div>
  );
}

export default BaseComponent;
