import React from "react";

import {Formik, Form, Field, ErrorMessage} from "formik";
import * as yup from "yup";
import Button from 'react-bootstrap/Button';
import Axios from "axios";

const handleClickCadastro = (values) => {
    Axios.post("http://localhost:3001/register", {
        email: values.email,
        password: values.password,
    }).then((response) => {
        console.log(response);
    });
};

const validationCadastro = yup.object().shape({
    email: yup.string().email("Este email não é válido").required("Este campo é obrigatorio"),
    password: yup.string().min(8,'Necessário 8 caracteres').required("Este campo é obrigatorio"),
    Confirmpassword: yup.string().oneOf([yup.ref('password'),null],'As senhas não são iguais')
});

const Register = () => (

    

    <div>
        <h1>Cadastro</h1>
        <Formik
        initialValues={{}}
        onSubmit={handleClickCadastro}
        validationSchema={validationCadastro}
        >
            <Form className="login-form">
                <div className="login-form-group">
                    <Field name="email" ClassName="form-field" placeholder="Email" />
                    <ErrorMessage
                    component="span"
                    name="email"
                    ClassName="form-error"
                    />
                </div>

                <div className="login-form-group">
                    <Field name="password" ClassName="form-field" placeholder="Senha" />
                    <ErrorMessage
                    component="span"
                    name="password"
                    ClassName="form-error"
                    />
                </div>

                <div ClassName="login-form-group">
                    <Field name="Confirmpassword" ClassName="form-field" placeholder="Confirmar senha" />
                    <ErrorMessage
                    component="span"
                    name="Confirmpassword"
                    ClassName="form-error"
                    />
                </div>
                <Button variant="primary" ClassName="button" type="submit">Registrar</Button>
            </Form>
        </Formik>
        {/*  */}
    </div>
)

export default Register;