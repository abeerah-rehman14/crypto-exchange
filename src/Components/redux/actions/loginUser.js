import { actionTypes } from './actionTypes';

export const loginUser = (user) =>{
   return{
    type: actionTypes.LOGIN_USER,
    payload: user
   }
}