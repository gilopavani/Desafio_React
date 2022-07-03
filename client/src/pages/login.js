import React, { useEffect, useState } from "react";

import {Formik, Form, Field, ErrorMessage} from "formik";
import * as yup from "yup";
import Button from 'react-bootstrap/Button';
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "../context/hooks/useAuth";


const validationLogin = yup.object().shape({
    email: yup.string().email("Este email não é válido").required("Este campo é obrigatorio"),
    password: yup.string().min(8,'Necessário 8 caracteres').required("Este campo é obrigatorio")
});

export default function Login() {
    const handleClickLogin = useAuth().handleClickLogin;

    return(
        <div>
        <h1>Login</h1>
        <Formik
        initialValues={{}}
        onSubmit={handleClickLogin}
        validationSchema={validationLogin}
        >
            <Form className="login-form">
                <div className="login-form-group">
                    <Field name="email" className="form-field" placeholder="Email" />
                    <ErrorMessage
                    component="span"
                    name="email"
                    className="form-error"
                    />
                </div>

                <div className="login-form-group">
                    <Field name="password" className="form-field" placeholder="Senha" />
                    <ErrorMessage
                    component="span"
                    name="password"
                    className="form-error"
                    />
                </div>
                <Button variant="primary" className="button" type="submit">Login</Button>
                
                {/*  */}
            </Form>
        </Formik>
        {/*  */}
    </div> 
    );
    
}