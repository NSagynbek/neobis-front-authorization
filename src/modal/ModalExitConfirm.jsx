import { useNavigate } from 'react-router-dom';

export default function ModalExitConfirm({setExit,exit}){
    const navigate = useNavigate()

    function handleYesExit (){
        navigate("/")
    }

    function handleStay(){
        setExit(!exit)
    }

    return(
    <div className="modal-window-container">
        <div className="modal-window">
            <p className="modal-window__Heading">Выйти?</p>
            <p className="modal-window__Text">Точно выйти?</p>
            <button onClick={handleYesExit} className="modal-window__Btn">Да, точно</button>
            <button onClick={handleStay} className="modal-window__Btn-stay">Нет, остаться</button>

        </div>
    </div>
    )
}