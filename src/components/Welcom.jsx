import { NavLink } from "react-router-dom"
import illustration from "../assets/images/illustration.png"
import ModalExitConfirm from "../modal/ModalExitConfirm"
export default function Welcom(){
    return(
        <div className="welcom-back">
            {/* <ModalExitConfirm/> */}
            <p className="welcom-back__heading">Добро пожаловать!</p>
            <p className="welcom-back__text">Lorby - твой личный репетитор</p>
            <div className="welcom-back__image-container">
                <img className="welcom-back__image" src={illustration} alt={illustration}  />
            </div>

            <NavLink to="/" className="welcom-back__exit">Выйти</NavLink>

        </div>
    )
}