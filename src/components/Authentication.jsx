import { useEffect } from 'react';
import { ensureRegistration } from '../Api';

export default function Authentication() {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    console.log(token)

    const getAuthorized = async () => {
      try {
        if (token) {
          const res = await ensureRegistration(token);
          console.log(res);
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
    <div>
      <h1>Authentication ...</h1>
    </div>
  );
}
