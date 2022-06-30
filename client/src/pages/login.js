import React from "react";

import {Formik, Form, Field, ErrorMessage} from "formik";
import * as yup from "yup";
import Button from 'react-bootstrap/Button';

const handleClickLogin = (values) => console.log(values);

const validationLogin = yup.object().shape({
    email: yup.string().email("Este email não é válido").required("Este campo é obrigatorio"),
    password: yup.string().min(8,'Necessário 8 caracteres').required("Este campo é obrigatorio")
});

const Login = () => (

    

    <div>
        <h1>Login</h1>
        <Formik
        initialValues={{}}
        onSubmit={handleClickLogin}
        validationSchema={validationLogin}
        >
            <Form className="login-form">
                <div className="login-form-group">
                    <Field name="email" className="form-field" placeHolder="Email" />
                    <ErrorMessage
                    component="span"
                    name="email"
                    classname="form-error"
                    />
                </div>

                <div className="login-form-group">
                    <Field name="password" className="form-field" placeHolder="Senha" />
                    <ErrorMessage
                    component="span"
                    name="password"
                    classname="form-error"
                    />
                </div>
                <Button variant="primary" className="button" type="submit">Login</Button>
            </Form>
        </Formik>
        {/*  */}
    </div>
)

export default Login;