import { useSelector} from "react-redux"

import { NavLink } from "react-router-dom"
import illustration from "../assets/images/illustration.png"


export default function WelcomeBack(){

    const isAuthenticated = useSelector(state => state.isAuthenticated)

    return(
        <div className="welcom-back">
            <p className="welcom-back__heading">С возвращением!</p>
            <p className="welcom-back__text">Lorby - твой личный репетитор</p>
            <div className="welcom-back__image-container">
                <img className="welcom-back__image" src={illustration} alt={illustration}  />
            </div>
            <h1>{isAuthenticated?<p>authenticated</p>:null}</h1>
            <NavLink to="/" className="welcom-back__exit">Выйти</NavLink>

        </div>
    )
}