import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ensureRegistration } from '../Api';
import CircularProgress from '@mui/material/CircularProgress';


export default function Authentication() {
  
  const [token, setToken] = useState(null); 
  const navigate = useNavigate()
  
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tokenFromParams = urlParams.get('token');

   
    setToken(tokenFromParams); 

    const getAuthorized = async () => {
      try {
        if (tokenFromParams) {
       const response =   await ensureRegistration(tokenFromParams);
       navigate("/welcom")
       console.log(response)

         
        } else {
          console.log('Token not found');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    getAuthorized();
  }, []); 

 

  return (
    <div className='authentication'> 
          <p>Аутентификация</p>
          <CircularProgress />   
    </div>
  );
}
