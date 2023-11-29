import illustration from '../assets/images/illustration.png';

import {Formik,Form,Field,ErrorMessage} from "formik"
import * as Yup from "yup"


const initialValues = {
  login:"",
  password:"",
}

const validationSchema = Yup.object({
    login:Yup.string().required("Required"),
    password:Yup.string().required("Required"),
})


export default function Login (){

    const onSubmit = (values) =>{
        console.log("form data", values)
    }

    return(
        <div className="login">
            <div className='login__container'>
                <img src={illustration} alt={illustration} className='login__container-image'  />
                <p className='login__container-heading'>Lorby</p>
                <p className='login__container-text'>Твой личный репетитор</p>
            </div>


        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        >

            <Form>

            <div className="form-control">
                <p className='form-control__heading'>Вэлком бэк!</p>

            <Field type="text" 
            id="login" 
            name="login" 
            placeholder="login"
            />

          <ErrorMessage name="login" />

           


            <Field type="password" 
            id="password" 
            name="password" 
            placeholder="password"
            />

            <ErrorMessage name="password" />

            <button type='submit' className='form-control__Btn'>Войти</button>

            <p className='form-control__noAccount'>У меня еще нет аккаунта</p>

            </div>




            </Form>

        </Formik>



        </div>
    )
}