import {
    LOGIN_SUCCESS,
    SIGNUP_SUCCESS,
    SEND_MESSAGE_SUCCESS,
    ENSURE_REGISTRATION_SUCCESS,
    AUTH_ERROR,
    FETCHING_DATA,
    SENT_STATUS
  } from "./authActionTypes";
  
  const initialState = {
    loading: false,
    isAuthenticated: false,
    token: null,
    sentStatus:false,
    errorMessage: null,
    formData: {
      email: "",
      password: "",
      username: "",
      link: "",
    },
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCHING_DATA:
        return {
          ...state,
          loading: true,
        };
      case LOGIN_SUCCESS:
        return {
          ...state, 
          isAuthenticated: true,
        };
      case SIGNUP_SUCCESS:
        return {
          ...state,
          loading: false,
          formData: {
            ...state.formData, 
            ...action.payload, 
          },
        }

      case SEND_MESSAGE_SUCCESS:
        return {
          ...state,
          loading: false,
          sentStatus: !state.sentStatus,
          token: action.payload,
        };
      case ENSURE_REGISTRATION_SUCCESS:
        return {
          ...state,
          loading: false,
          isAuthenticated: true,
        };
      case AUTH_ERROR:
        return {
          ...state,
          loading: false,
          errorMessage: action.payload,
        };

      case SENT_STATUS:
        return {
          ...state,
          sentStatus:false
        }  
      default:
        return state;
    }
  };
  
  export default reducer;
  