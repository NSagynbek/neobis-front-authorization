import { useEffect, useState } from 'react';
import { ensureRegistration } from '../Api';
import CircularProgress from '@mui/material/CircularProgress';


export default function Authentication() {
  
  const [token, setToken] = useState(null); 

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tokenFromParams = urlParams.get('token');

    setToken(tokenFromParams); 

    const getAuthorized = async () => {
      try {
        if (tokenFromParams) {
          await ensureRegistration(tokenFromParams);
         
        } else {
          console.log('Token not found');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    getAuthorized();
  }, [token]); 

 

  return (
    <div className='authentication'> 
          <p>Аутентификация</p>
          <CircularProgress />   
    </div>
  );
}
