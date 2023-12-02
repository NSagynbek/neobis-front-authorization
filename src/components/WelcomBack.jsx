import { NavLink } from "react-router-dom"
import illustration from "../assets/images/illustration.png"
export default function WelcomeBack(){
    return(
        <div className="welcom-back">
            <p className="welcom-back__heading">С возвращением!</p>
            <p className="welcom-back__text">Lorby - твой личный репетитор</p>
            <div className="welcom-back__image-container">
                <img className="welcom-back__image" src={illustration} alt={illustration}  />
            </div>

            <NavLink to="/" className="welcom-back__exit">Выйти</NavLink>

        </div>
    )
}