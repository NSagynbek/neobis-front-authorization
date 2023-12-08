import { LOGIN_SUCCESS} from "./authActionTypes"
import { SIGNUP_SUCCESS}from "./authActionTypes"
import { SEND_MESSAGE_SUCCESS}from "./authActionTypes"
import { ENSURE_REGISTRATION_SUCCESS}from "./authActionTypes"
import {AUTH_ERROR} from "./authActionTypes"
import { SENT_STATUS} from "./authActionTypes"
import {SAVE_USER} from "./authActionTypes"

export const loginSuccess = (jwt) => {
    return{
        type: LOGIN_SUCCESS,
        payload: jwt,
    }
  };
  
  export const signupSuccess = (message) => {
   return{
    type: SIGNUP_SUCCESS,
    payload:message
   }
  };

  export const urlSend = (token) => {
   return{
    type:SEND_MESSAGE_SUCCESS,
    payload:token
   }
  };

  export const confirmation = (message) => {
    return {
        type:ENSURE_REGISTRATION_SUCCESS,
         payload:message
    }
  };

  export const authError = (error)=>{
    return {
        type:AUTH_ERROR,
        payload:error
    }
  }

  export const emailSentStatus = ()=>{
    return {
      type:SENT_STATUS,
    }
  }

  export const saveUser = (values)=>{
    return {
      type:SAVE_USER,
      payload:values,
    }
  }
  

  