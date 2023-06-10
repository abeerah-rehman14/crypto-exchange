import React, { useState , useEffect} from "react";
import { Form, Button } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import {useNavigate} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify'
import {useSelector,useDispatch} from 'react-redux'
import { updateLoginUser } from '../reduxToolkit/loginUserReducer';
import { fetchUserData } from '../reduxToolkit/userReducer';





function LoginUser()
{
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const [incorrectPasswordCount,setIncorrectPasswordCount] = useState(0);
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [registeredUser, setRegisteredUser] = useState([]);    
    const [blockedUser, setBlockedUser] = useState([]);
    const [showAlert, setShowAlert] = useState(false);
    const [showErrorAlert, setShowErrorAlert] = useState(false);

    const { registeredUsers } = useSelector((state)=>state.users)
    const { status } = useSelector((state)=>state.users)

  
    useEffect(()=>{
      dispatch(fetchUserData())

   },[dispatch])


    const handleSubmit = (e) => {
      e.preventDefault();



      if(status === "success"){
        console.log("here")
         registeredUsers.forEach(element => {
          registeredUser.push(element)          
         });

      }

       let checkBlockList = blockedUser.findIndex(user => user.email === email)        
       let loginUser = registeredUser.find(user => user.email === email)
       if(checkBlockList >= 0)
       {
        showErrorMessageAlert("Due to incorrect password, " +loginUser.name+ ": your account has been blocked")
       }
       else if(loginUser)
       {
        if(loginUser.password === password)
        {
          showSuccessAlert()
          dispatch(updateLoginUser(loginUser))
          navigate("/dashboard")
        }
        else{
          setIncorrectPasswordCount(incorrectPasswordCount+1)
          if(incorrectPasswordCount > 2 ) 
          {
            showErrorMessageAlert("Due to incorrect password, " +loginUser.name+ ": your account has been blocked")
            handleBlockedUser(loginUser)
 
          }
          else {
            showErrorMessageAlert("Password is incorrect, please try again")
          }
        }
       }
       else{
        showErrorMessageAlert("Incorrect email address")
       }
    };


    const onRegister = () =>{
      navigate("/signup")
    }


    const handleBlockedUser = (newUser) => {
      setBlockedUser([...blockedUser, newUser]);

    };

    const showSuccessAlert = () => {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 5000);
    };
  
    const showErrorMessageAlert = (message) => {
      setShowErrorAlert(message);
      setTimeout(() => {
        setShowErrorAlert('');
      }, 3000);
    };


    return(
      <>
        <h3>Crypto Exchange</h3>
        <div className="container row">
        <div className="col-6 mx-auto portal-form">
          <h3>Sign in</h3>
          {showAlert && (
            <Alert
              variant="success"
              onClose={() => setShowAlert(false)}
              dismissible
            >
             You have signed in successfully!
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
           
            <Form.Group controlId="email" className="mt-4">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>


            <Button type="submit" className="mt-2">
              Submit
            </Button>
            <Button
            variant="outline-success"
            className="mt-2"
            onClick={onRegister}
            style={{ marginLeft: "10px" }}
          >
            Register
          </Button>
            
          </Form>
        </div>
      </div>
      </>
    )
}

export default LoginUser;