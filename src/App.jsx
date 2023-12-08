import { Provider } from "react-redux";
import store from '/src/redux/store.js';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';

import Login from './components/Login';
import SignUp from './components/SignUp';
import Authentication from './components/Authentication';
import WelcomeBack from "./components/WelcomBack"
import EmailSent from "./components/EmailSent"
import Welcom from "./components/Welcom"
import RootLayout from "./layouts/RootLayout"
import {PrivateRoutes} from "./components/utils/PrivateRoutes";



const App = () => {
  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_BASE_URL;
   
  }, []);

  return (
    <Provider store={store}>
    <Router>

      <Routes>
        <Route path="/" element={<RootLayout/>}>
          
        <Route element={<PrivateRoutes/>}>       
        <Route path="/welcomback" element={<WelcomeBack />} />      
        <Route path="/welcom" element={<Welcom />} />
      </Route>
       <Route path="/email" element={<EmailSent />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        </Route>

      </Routes>

    </Router>
    </Provider>
  );
};

export default App;


