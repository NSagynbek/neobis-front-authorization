export default function ModalExitConfirm(){
    return(
    <div className="modal-window-container">
        <div className="modal-window">
            <p className="modal-window__Heading">Выйти?</p>
            <p className="modal-window__Text">Точно выйти?</p>
            <button className="modal-window__Btn">Да, точно</button>
            <button className="modal-window__Btn-stay">Нет, остаться</button>

        </div>
    </div>
    )
}