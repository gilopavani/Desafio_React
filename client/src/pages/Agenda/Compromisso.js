import App from '../../layouts/App';
import Button from 'react-bootstrap/Button';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import * as yup from "yup";
import '../../estilos/agenda/novo.css'

import {Formik, Form, Field, ErrorMessage} from "formik";
import { useState } from 'react';

const validationCadastro = yup.object().shape({
    titulo: yup.string().required("Este campo é obrigatorio").max(30,"Máximo 30 caracteres"),
    descricao: yup.string().required("Este campo é obrigatorio").max(100,"Máximo 100 caracteres"),
    data: yup.date().required("Este campo é obrigatorio").default(() => (new Date())),
});

export default function Compromisso() {
    const [selectedDate, setSelectedDate] = useState(null);
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
                            // onSubmit={}
                            validationSchema={validationCadastro}
                            >
                                <Form className="login-form">
                                    <div className="login-form-group">
                                        <Field name="titulo" ClassName="form-field" placeholder="Titulo" id="data"/>
                                        <ErrorMessage
                                        component="span"
                                        name="titulo"
                                        ClassName="form-error"
                                        />
                                        <Field name="descricao" ClassName="form-field" placeholder="Detalhes" as="textarea" id="data"/>
                                        <ErrorMessage
                                        component="span"
                                        name="descricao"
                                        ClassName="form-error"
                                        />
                                        <DatePicker selected={selectedDate} onChange={ date => setSelectedDate(date)}
                                        name="data"
                                        id="data"
                                        dateFormat='dd/MM/yyyy'
                                        startDate={new Date()}
                                        minDate={new Date()}
                                        showYearDropdown
                                        scrollableMonthYearDropdown
                                        />
                                        <ErrorMessage
                                        component="span"
                                        name="data"
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