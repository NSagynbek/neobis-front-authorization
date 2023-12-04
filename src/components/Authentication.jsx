import { useEffect, useState } from 'react';
import { ensureRegistration } from '../Api';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';

export default function Authentication() {
  const navigate = useNavigate();
  const [redirect, setRedirect] = useState(false);
  const [token, setToken] = useState(null); // Declare 'token' using useState

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tokenFromParams = urlParams.get('token');

    setToken(tokenFromParams); // Set the 'token' state with the received value

    const getAuthorized = async () => {
      try {
        if (tokenFromParams) {
          await ensureRegistration(tokenFromParams);
          setRedirect(true);
        } else {
          console.log('Token not found');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    getAuthorized();
  }, [token]); // Add 'token' as a dependency here

  useEffect(() => {
    if (redirect) {
      navigate('/');
    }
  }, [redirect, navigate]);

  return (
    <div className='authentication'>
      {redirect ? (
        <p>аутентификация прошла успешно</p>
      ) : (
        <div>
          <p>Аутентификация</p>
          <CircularProgress />
        </div>
      )}
    </div>
  );
}
