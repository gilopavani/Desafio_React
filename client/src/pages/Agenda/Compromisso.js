import App from '../../layouts/App';
import Button from 'react-bootstrap/Button';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import * as yup from "yup";
import '../../estilos/agenda/novo.css'
import useAuth from '../../context/hooks/useAuth';

import {Formik, Form, Field, ErrorMessage} from "formik";
import { useState } from 'react';

const validationCadastro = yup.object().shape({
    compromisso: yup.string().required("Este campo é obrigatorio").max(30,"Máximo 30 caracteres"),
    informacoes: yup.string().required("Este campo é obrigatorio").max(100,"Máximo 100 caracteres"),
    date: yup.date().required("Este campo é obrigatorio"),
});

export default function Compromisso() {

    const [native, setNative] = useState("");
    const onNativeChange = e => {
        console.log("onNativeChange: ", e.target.value);
        setNative(e.target.value);
    };



    const reg = useAuth().handleClickNewRegister;
    const [selectedDate, setSelectedDate] = useState(new Date());
    if(!localStorage.getItem('token')){
        return (
            <App>
                <div class="container bg-light">
                    <div class="col-md-12 text-center">
                        
                            <h1>Você precisa de uma conta</h1>
                            <h2>Faça login</h2>
                        
                    </div>
                </div>
            </App>
        )
    }else{
        return(
            <App>
                <div class="container bg-light">
                    <div class="col-md-12 text-center">
                        
                        <div>
                            <h1 id="data">Cadastro novo item</h1>
                            <Formik
                            initialValues={{}}
                            onSubmit={reg}
                            validationSchema={validationCadastro}
                            >
                                <Form className="login-form">
                                    <div className="login-form-group">
                                        <Field name="compromisso" ClassName="form-field" placeholder="Compromisso" id="data"/>
                                        <ErrorMessage
                                        component="span"
                                        name="compromisso"
                                        ClassName="form-error"
                                        />
                                        <Field name="informacoes" ClassName="form-field" placeholder="Informacoes" as="textarea" id="data"/>
                                        <ErrorMessage
                                        component="span"
                                        name="informacoes"
                                        ClassName="form-error"
                                        />
                                        {/* <DatePicker selected={selectedDate} onChange={ date => setSelectedDate(date)}
                                        name="date"
                                        id="data"
                                        dateFormat='dd/MM/yyyy'
                                        minDate={new Date()}
                                        showYearDropdown
                                        scrollableMonthYearDropdown
                                        /> */}
                                        {/* <input type="date" value={native} onChange={onNativeChange} name="date"/> */}
                                        <Field name="date" ClassName="form-field" placeholder="yyyy/MM/dd"  id="data"/>
                                        <ErrorMessage
                                        component="span"
                                        name="date"
                                        ClassName="form-error"
                                        />
                                    
                                        <Button variant="primary" ClassName="button" type="submit" >Registrar</Button>
                                    </div>
                                </Form>
                            </Formik>
                        </div>
                        
                    </div>
                </div>
            </App>
        )
    }
}