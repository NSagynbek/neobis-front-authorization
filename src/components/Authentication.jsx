import { useEffect, useState } from 'react';
import { ensureRegistration } from '../Api';
import CircularProgress from '@mui/material/CircularProgress';
import { Redirect } from 'react-router-dom';

export default function Authentication() {
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');

    const getAuthorized = async () => {
      try {
        if (token) {
          await ensureRegistration(token);
          setRedirect(true);
        } else {
          console.log('Token not found');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    getAuthorized();
  }, [token]);

  if (redirect) {
    return <Redirect to="/" />;
  }

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

