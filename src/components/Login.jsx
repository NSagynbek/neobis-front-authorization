import illustration from '../assets/images/illustration.png';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { IconButton, InputAdornment } from '@mui/material';
import TextError from "./TextError"
import { useState} from 'react';
import { NavLink } from 'react-router-dom';


import {Formik,Form,Field,ErrorMessage} from "formik"
import * as Yup from "yup"
import PasswordModal from "../modal/PasswordModal"
import { login } from '../Api';




const initialValues = {
  login:"",
  password:"",
}

const validationSchema = Yup.object({
    login:Yup.string().required("Required"),
    password:Yup.string().required("Required"),
})



export default function Login (){

    const [showPassword, setShowPassword] =useState(false);
    const [iconToggle, setIcon] = useState(false);

   
    function handlePasswordVisibility(){
        setShowPassword(!showPassword);
        setIcon(!iconToggle)
    }

    const onSubmit = async (values) =>{
        const response = await login(values)
        console.log(response)
    }

    return(
        <div className="login">
            <PasswordModal/>
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

            <Form>

            <div className="form-control">
                <p className='form-control__heading'>Вэлком бэк!</p>

            <Field type="text" 
            id="login" 
            name="login" 
            placeholder="Введи логин"
            />

          <ErrorMessage name="login" component={TextError} />

           

         <div className='password'>

            <Field 
            type={showPassword?"text":"password"} 
            id="password" 
            name="password" 
            placeholder="Введи пароль"
            />

            <InputAdornment position="end" className='MUicon' >
                <IconButton onClick={handlePasswordVisibility} edge="end">
                {iconToggle?<VisibilityOutlinedIcon/>:<VisibilityOffOutlinedIcon/>} 
                </IconButton>
            </InputAdornment>

         </div>

            <ErrorMessage name="password" component={TextError}/>

            <button type='submit' className='form-control__Btn'>Войти</button>

            <NavLink to="/signup" className='form-control__noAccount'>У меня еще нет аккаунта</NavLink>

            </div>




            </Form>

        </Formik>



        </div>
    )
}