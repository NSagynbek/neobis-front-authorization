import {useDispatch,useSelector} from "react-redux"
import {emailSentStatus}  from "../redux/index"

export default function EmailModal(){
    const sentStatus = useSelector(state => state.sentStatus);
    const dispatch = useDispatch();

   async function handleClick  (){
    dispatch(emailSentStatus());
    console.log("clicking")
    console.log(sentStatus)

    }

    return(
    <div className="modal-window-container">
        <div className="modal-window">
            <p className="modal-window__Heading">Мы выслали еще одно письмо на указанную тобой почту example@gmail.com</p>
            <p className="modal-window__Text">Не забудь проверить ящик “Спам”!</p>
            <button onClick={handleClick} className="modal-window__Btn">Понятно</button>

        </div>
    </div>
    )
}