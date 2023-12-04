import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';

import Login from './components/Login';
import SignUp from './components/SignUp';
import Authentication from './components/Authentication';
import WelcomeBack from "./components/WelcomBack"
import EmailSent from "./components/EmailSent"
import Welcom from "./components/Welcom"
import RootLayout from "./layouts/RootLayout"



const App = () => {
  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_BASE_URL;
   
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/welcomback" element={<WelcomeBack />} />
        <Route path="/email" element={<EmailSent />} />
        <Route path="/welcom" element={<Welcom />} />
      </Routes>
    </Router>
  );
};

export default App;


