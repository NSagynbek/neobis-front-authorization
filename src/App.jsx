
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom"

import Login from "./components/Login"
import RootLayout from "./layouts/RootLayout"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route path="/" element={<Login/>}/>


    </Route>
  )
)


function App() {


  return (
 <div>
  <RouterProvider router={router}/>
 </div>
  )
}

export default App
