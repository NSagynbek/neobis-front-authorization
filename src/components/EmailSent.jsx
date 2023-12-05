import illustration from '../assets/images/illustration.png';
import { IconButton, InputAdornment } from '@mui/material';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import { NavLink } from 'react-router-dom';

import { useState } from 'react';

import EmailModal from "../modal/EmailModal"
import { sendMessage } from '../Api';




export default function EmailSent(){

    const [modal,setModal]=useState(false)

const handleRequest = async ()=>{ 
    try{
        const res = await sendMessage(formData)
        setModal(true)     
      } catch(error){
        console.log(error)
      
      }
}


    return(
       <div className='emailSent'>
          {modal? <EmailModal/> :null}
         <label htmlFor="backBtn" className='backBtn-label'>
              <NavLink id='backBtn-label__link' to="/signup">
              Назад
              </NavLink>

            <NavLink to="/" className='backIcon' id="backBtn">
                 <IconButton edge="start">
                   <ChevronLeftOutlinedIcon />
               </IconButton>
            </NavLink>
         </label>
        <div className='email-container'>

            <div className='login__container'>
                <img src={illustration} alt={illustration} className='login__container-image'  />
                <p className='login__container-heading'>Lorby</p>
                <p className='login__container-text'>Твой личный репетитор</p>
            </div>


            <div className='email'>
                <p className='email__Heading'><span>Выслали письмо со ссылкой для</span> <span>завершения регистрации на</span> <span> example@gmail.com</span> </p>
                <p className='email__Text'>
                Если вы не нашли его во входящих, проверьте папку «Спам».  Иногда электронные письма могут оказаться там по ошибке.
               (´｡• ω •｡`)
                </p>

                <button onClick={handleRequest} className='email__Btn'>Письмо не пришло</button>
            </div>





        </div>
        </div>
    )
}