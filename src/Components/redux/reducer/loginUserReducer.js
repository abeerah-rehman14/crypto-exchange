import { loginUser } from '../actions/loginUser'
import { actionTypes } from '../actions/actionTypes'

const initialState = {
    loginUser : { 
        "id": 0,
        "name": "Abeera Rehman",
        "email": "abeerah.rehman@systemsltd.com",
        "password": "P@ssw0rd",
        "address": "address",
        "cnic": "base64"
      }
}

const loginUserReducer = (state=initialState,action)=>{

    switch(action.type){
        case actionTypes.LOGIN_USER:
            return{
                ...state,
                loginUser: action.paylod
            }
        default:
            return state    
        
    }

}
export default loginUserReducer