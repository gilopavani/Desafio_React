import React, { useEffect, useState } from "react";

import {Formik, Form, Field, ErrorMessage} from "formik";
import * as yup from "yup";
import Button from 'react-bootstrap/Button';
import Axios from "axios";
import history from "../history";





const validationLogin = yup.object().shape({
    email: yup.string().email("Este email não é válido").required("Este campo é obrigatorio"),
    password: yup.string().min(8,'Necessário 8 caracteres').required("Este campo é obrigatorio")
});

export default function Login() {
    const token = localStorage.getItem('@welcome-app/username');

    const [user, setUser] = useState();

    const handleClickLogin = (values) => {
        Axios.post("http://localhost:3001/login", {
            email: values.email,
            password: values.password,
        }).then((response) => {
            console.log(response);
            localStorage.setItem('token', response.data.token);
            setUser(response.data);
        });
        history.push('/register');
    };



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