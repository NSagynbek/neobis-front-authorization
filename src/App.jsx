
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

import Login from "./components/Login"
import RootLayout from "./layouts/RootLayout"
import WelcomeBack from "./components/WelcomBack"
import SignUp from "./components/SignUp"
import EmailSent from "./components/EmailSent"


import Welcom from "./components/Welcom"
import Authentication from "./components/Authentication"




function App() {


  return (
    <Router>
      <Routes>

        <Route path="/" element={<RootLayout/>}>

          <Route path="/" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/auth" element={<Authentication/>}/>

          <Route path="/welcomback" element={<WelcomeBack/>}/>      
          <Route path="/email" element={<EmailSent/>}/>
          <Route path="/welcom" element={<Welcom/>}/>




        </Route>

      </Routes>
    </Router>

  )
}

export default App
