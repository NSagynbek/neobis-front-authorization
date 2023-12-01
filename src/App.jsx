
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

import Login from "./components/Login"
import RootLayout from "./layouts/RootLayout"
import WelcomeBack from "./components/WelcomeBack"
import SignUp from "./components/SignUp"
import EmailSent from "./components/EmailSent"
import EmailModal from "./components/EmailModal"
import PasswordModal from "./components/PasswordModal"




function App() {


  return (
    <Router>
      <Routes>

        <Route path="/" element={<RootLayout/>}>

          <Route path="/" element={<Login/>}/>
          <Route path="/welcom" element={<WelcomeBack/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/email" element={<EmailSent/>}/>
          <Route path="/modal" element={<EmailModal/>}/>


        </Route>

      </Routes>
    </Router>

  )
}

export default App
