import React, { useEffect, useState } from "react";

import {Formik, Form, Field, ErrorMessage} from "formik";
import * as yup from "yup";
import Button from 'react-bootstrap/Button';
import useAuth from "../context/hooks/useAuth";
import App from "../layouts/App";
import '../estilos/login.css'


const validationLogin = yup.object().shape({
    email: yup.string().email("Este email não é válido").required("Este campo é obrigatorio"),
    password: yup.string().min(8,'Necessário 8 caracteres').required("Este campo é obrigatorio")
});

export default function Login() {
    const handleClickLogin = useAuth().handleClickLogin;
    const red = useAuth().callRegister;
    if(localStorage.getItem('token')){
       return (
        <div class="container bg-light">
                <div class="col-md-12 text-center">
                    <h1>Você já esta logado</h1>
                <Button variant="light" size="lg" id="button" onClick={red}>Voltar para Inicio</Button>
            </div>
        </div>
            
                
            
       )
    }else{

        return(
            <App>
            <div >
                
                <Formik
                initialValues={{}}
                onSubmit={handleClickLogin}
                validationSchema={validationLogin}
                >
                    <Form className="login-form">
                        <div className="login-form-group" id="container-one">
                            <Field name="email" className="form-field" placeholder="Email" />
                            <ErrorMessage
                            component="span"
                            name="email"
                            className="form-error"
                            />
                        </div>

                        <div className="login-form-group" id="all_Container">
                            <Field name="password" className="form-field" placeholder="Senha" type='password' />
                            <ErrorMessage
                            component="span"
                            name="password"
                            className="form-error"
                            />
                        </div>
                        <div class="container bg-light">
                            <div class="col-md-12 text-center">
                                <Button variant="primary" class="btn btn-default"  type="submit">Login</Button>
                            </div>
                        </div>
                        
                        
                        {/*  */}
                    </Form>
                </Formik>
                {/*  */}
            </div> 
        </App>
        )}

       
    
}