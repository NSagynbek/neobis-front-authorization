
import { useState } from "react"
import { NavLink } from "react-router-dom"
import ModalExitConfirm from "../modal/ModalExitConfirm"
import illustration from "../assets/images/illustration.png"


export default function WelcomeBack(){

    const [exit,setExit] = useState(false)


    function handleExit(){
        setExit(!exit)
    }

    return(
        <div className="welcom-back">
            {exit? <ModalExitConfirm setExit={setExit} exit={exit}/> :null }
            <p className="welcom-back__heading">С возвращением!</p>
            <p className="welcom-back__text">Lorby - твой личный репетитор</p>
            <div className="welcom-back__image-container">
                <img className="welcom-back__image" src={illustration} alt={illustration}  />
            </div>
            <button className="welcom-back__exit" onClick={handleExit} >Выйти</button>

        </div>
    )
}