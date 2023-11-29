import {NavLink, Outlet} from "react-router-dom"
import Login from "../components/Login"

export default function RootLayout (){
    return(
        <div>
              <header>
                <nav>
                    {/* <NavLink to="/">The Meal</NavLink> */}
                </nav>
            </header>

            <main>
                <Outlet/>
            </main>
        
        </div>
    )
}