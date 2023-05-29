import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import {useNavigate} from "react-router-dom"

function RegisterUser({addUser})
{
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [address,setAddress] = useState("");
    const [cnic,setCnic] = useState("");

    const [showAlert, setShowAlert] = useState(false);
    const [showErrorAlert, setShowErrorAlert] = useState('');

    const navigate = useNavigate()

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        if(password.length < 10) {
          showErrorMessageAlert('Password length should be atleast 10 characters.');
          return;
        }

        addUser({name: name,email: email,password: password,address: address,cnic:"base64"})
       // console.log("here",name,email)
        navigate("/")

        showSuccessAlert()
    };


    const showSuccessAlert = () => {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 2000);
    };
  
    const showErrorMessageAlert = (message) => {
      setShowErrorAlert(message);
      setTimeout(() => {
        setShowErrorAlert('');
      }, 3000);
    };


    return(
        <div className="container row">
        <div className="col-6 mx-auto">
          <h3>Sign up</h3>
          {showAlert && (
            <Alert
              variant="success"
              onClose={() => setShowAlert(false)}
              dismissible
            >
              Your account has been registered!
            </Alert>
          )}
          {showErrorAlert && (
            <Alert
              variant="danger"
              onClose={() => setShowAlert(false)}
              dismissible
            >
              {showErrorAlert}
            </Alert>
          )}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label className='label'>Name</Form.Label>
              <Form.Control
                className='input'
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="email" className="mt-4">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="password" className="mt-4">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="address" className="mt-4">
              <Form.Label>Address</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="cnic">
              <Form.Label>Cnic</Form.Label>
              <Form.Control
                type="file"
                placeholder="Attach Cnic"
                accept = "application/pdf"
                onChange={(e) => setCnic(e.target.value)}
                required
              />
            </Form.Group>
            <Button type="submit" className="mt-2">
              Submit
            </Button>
            
          </Form>
          
        </div>
      </div>
    )
}

export default RegisterUser;