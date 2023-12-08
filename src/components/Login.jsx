import {useDispatch } from "react-redux"
import { loginSuccess,saveUser } from "../redux/index"
import illustration from '../assets/images/illustration.png';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { IconButton, InputAdornment } from '@mui/material';
import TextError from "./TextError"
import { useState} from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


import {Formik,Form,Field,ErrorMessage} from "formik"
import * as Yup from "yup"
import PasswordModal from "../modal/PasswordModal"
import { login } from '../Api';




const initialValues = {
  username:"",
  password:"",
}

const validationSchema = Yup.object({
    username:Yup.string().required("Required"),
    password:Yup.string().required("Required"),
})



export default function Login (){


    const dispatch = useDispatch()

    const [showPassword, setShowPassword] =useState(false);
    const [iconToggle, setIcon] = useState(false);
    const [pass, setPass] = useState(false);

    const navigate = useNavigate();

  

   
    function handlePasswordVisibility(){
        setShowPassword(!showPassword);
        setIcon(!iconToggle)
    }

    const onSubmit = async (values) => {
        console.log(values);
        try {
            const response = await login(values); 
            dispatch(loginSuccess());
            dispatch(saveUser(values));
            console.log(response)
            setPass(false)

            if(!pass){    

            const users = JSON.parse(localStorage.getItem("users")) || [];
            const userExists = users.some((el) => el.username === values.username);
            
            if (userExists) {
                navigate('/welcomback');
            } else {
                navigate('/welcom');
            }
            
                
                
            }
                 
                   
        } catch (error) {
           
            console.error('Error during login:', error);
            setPass(true)
            setTimeout(()=>{
                setPass(false)

            },2500)
        }
    };

    return(
        <div className="login">
                    {pass?<PasswordModal/>:null}
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
            name="username" 
            placeholder="Введи логин"
            />

          <ErrorMessage name="username" component={TextError} />

           

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