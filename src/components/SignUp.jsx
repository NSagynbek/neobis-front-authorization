import illustration from '../assets/images/illustration.png';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { IconButton, InputAdornment } from '@mui/material';
import { useState} from 'react';
import PasswordRequirements from './PasswordRequirements';
import TextError from './TextError';

import {Formik, Form, Field, ErrorMessage} from "formik";
import * as yup from "yup";

const initialValues = {
    email:"",
    password:"",
    secondPassword:"",
    username:"",
    link:"",
  }





export default function SignUp(){
    const [showSecond, setSecond] =useState(false);
    const [showSecondRepead, setSecondRepead] =useState(false);

    const validationSchema = yup.object({
        email: yup.string().email("Invalid format").required("Required"),
        username: yup.string().required("Required"),
        password: yup.string().required("Required"),
        secondPassword: yup
          .string()
          .required("Required")
          .oneOf([yup.ref('password'), null], 'Passwords must match'), // Validation for matching passwords
      });

    function handlePasswordVisibility(){
        setSecond(!showSecond);
    }

    function handleRepeadVisibility(){
        setSecondRepead(!showSecondRepead);
    }

    const onSubmit = (values,{setSubmitting}) =>{
        console.log("form data", values)
        setSubmitting(false);
    }


  
    return(
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
                  <VisibilityOutlinedIcon />
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
                  <VisibilityOutlinedIcon />
                </IconButton>
            </InputAdornment>

         </div>

            <ErrorMessage name="secondPassword" component={TextError} />

            <button type='submit' className='form-control__Btn-sign-in'>Далее</button>


            </div>




            </Form>
            )}

        </Formik>



        </div>
    )
}