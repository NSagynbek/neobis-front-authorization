import { useSelector,useDispatch } from "react-redux"
import {signupSuccess} from "../redux/index"

import illustration from '../assets/images/illustration.png';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import { IconButton, InputAdornment } from '@mui/material';
import PasswordRequirements from './PasswordRequirements';
import TextError from './TextError';
import { NavLink } from 'react-router-dom';
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as yup from "yup";

import { useNavigate } from 'react-router-dom';
import { useState} from 'react';

import { signup,sendMessage } from '../Api';
import EmailSent from "./EmailSent";





const initialValues = {
    email:"",
    password:"",
    secondPassword:"",
    username:"",
    link:"https://neobis-front-authorization.vercel.app/auth",
  }





export default function SignUp(){
  const formData = useSelector(state => state.formData)
  const dispatch = useDispatch()

  const navigate = useNavigate()
  
    const [iconToggle, setIcon] = useState(false);
    const [iconToggleRep, setIconRep] = useState(false);
    const [showSecond, setSecond] =useState(false);
    const [showSecondRepead, setSecondRepead] =useState(false);

    const validationSchema = yup.object({
      email: yup.string().email('Invalid format').required('Required'),
      username: yup.string().required('Required'),
      password: yup
        .string()
        .required('Required')
        .min(8, '') 
        .matches(/[a-z]/, '') 
        .matches(/[A-Z]/, '') 
        .matches(/[0-9]/, '') 
        .matches(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/, ''),
      secondPassword: yup
        .string()
        .required('Required')
        .oneOf([yup.ref('password'), null], 'Passwords must match'),
    });
    
    

    function handlePasswordVisibility(){
        setSecond(!showSecond);
        setIcon(!iconToggle);
    }

    function handleRepeadVisibility(){
        setSecondRepead(!showSecondRepead);
        setIconRep(!iconToggleRep)
    }

    const onSubmit = async (values, { setSubmitting }) => {
      try{
      const formData = {
          email: values.email,
          password: values.password,
          username: values.username,
          link:values.link         
      };
  
      const response = await signup(formData);
     
      console.log(response);
try{
  const res = await sendMessage(formData)
  dispatch(signupSuccess(formData));
  console.log(res)
  navigate("/")

} catch(error){
  console.log(error)

}
     

      console.log(res)
  
      setSubmitting(false);
    } catch(error){
      console.log("Error",error)
      setSubmitting(false);
    }
  };


  
    return(
      <div className='signUp-container'>

        <label htmlFor="backBtn" className='backBtn-label'>
              <NavLink id='backBtn-label__link' to="/">
              Назад
              </NavLink>

            <NavLink to="/" className='backIcon' id="backBtn">
                 <IconButton edge="start">
                   <ChevronLeftOutlinedIcon />
               </IconButton>
            </NavLink>
        </label> 

        <div className="login">

            <div className='login__container'>
                <img src={illustration} alt={illustration} className='login__container-image'  />
                <p className='login__container-heading'>Lorby</p>
                <p className='login__container-text'>Твой личный репетитор</p>
            </div>


        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        >
        {(formikProps)=>(
            <Form>

    <div className="form-control">

                <p className='form-control__heading'>Создать аккаунт Lorby</p>

            <Field type="text" 
            id="email" 
            name="email" 
            placeholder="Введи адрес почты"
            className={
                formikProps.errors.email && formikProps.touched.email
                  ? "error-field" 
                  : ""
              }
            />
          <ErrorMessage name="email" component={TextError} />    

            <Field type="text" 
            id="login" 
            name="username" 
            placeholder="Придумай логин"
            className={
                formikProps.errors.username && formikProps.touched.username
                  ? "error-field" 
                  : ""
              }
            />

          <ErrorMessage name="username" component={TextError} />

           

         <div className='password'>

            <Field 
            type={showSecond?"text":"password"} 
            id="password" 
            name="password" 
            placeholder="Создай пароль"
            />

            <InputAdornment position="end" className='MUicon' >
                <IconButton onClick={handlePasswordVisibility} edge="end">
                  {iconToggle?<VisibilityOutlinedIcon/>:<VisibilityOffOutlinedIcon/>}                 
                </IconButton>
            </InputAdornment>

         </div>
        
         <PasswordRequirements password={formikProps.values.password || ""}/>


         <div className='password'>

            <Field 
            type={showSecondRepead?"text":"password"} 
            id="secondPpassword" 
            name="secondPassword" 
            placeholder="Повтори пароль"
            className={
                formikProps.errors.secondPassword && formikProps.touched.secondPassword
                  ? "error-field" 
                  : ""
              }
            />

            <InputAdornment position="end" className='MUicon' >
                <IconButton onClick={handleRepeadVisibility} edge="end">
                {iconToggleRep?<VisibilityOutlinedIcon/>:<VisibilityOffOutlinedIcon/>}
                </IconButton>
            </InputAdornment>

         </div>
        
            <ErrorMessage name="secondPassword" component={TextError} />

            <button
            type='submit'
            className={`form-control__Btn-sign-in ${
            formikProps.dirty && formikProps.isValid ? 'form-control__Btn-sign-in-valid' : ''}`}
            disabled={!formikProps.dirty || !formikProps.isValid}
             >
            Далее
           </button>



            </div>




            </Form>
            )}

        </Formik>



        </div>

      </div>
    )
}