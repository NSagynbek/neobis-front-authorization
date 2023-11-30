
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

import Login from "./components/Login"
import RootLayout from "./layouts/RootLayout"
import WelcomeBack from "./components/WelcomeBack"
import SignUp from "./components/SignUp"




function App() {


  return (
    <Router>
      <Routes>

        <Route path="/" element={<RootLayout/>}>

          <Route path="/" element={<Login/>}/>
          <Route path="/welcom" element={<WelcomeBack/>}/>
          <Route path="/signup" element={<SignUp/>}/>


        </Route>

      </Routes>
    </Router>

  )
}

export default App
