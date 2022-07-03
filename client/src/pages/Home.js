/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Row, Col } from "reactstrap";
import App from "../layouts/App";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import logout from "../context/hooks/useAuth";
import { Formik, Form } from "formik";
// import Image from 'react-bootstrap/Image'
import '../estilos/Home.css'




export default function Home() {
    return (

        <App>
            <div>
            <div id="container-init">
                <Row>
                    <Col id='apresentacao' xs={5}>
                        <p id='titulo-01'>
                            Venha conhecer a melhor agenda online
                        </p>
                        <p id="titulo-02" >
                            Com a IAgenda você pode marcar todos seus compromissos e ter certeza que sempre será lembrado deles.
                        </p>
                        <Button variant="light" size="lg" id="button">Registre-se</Button>
                    </Col>
                    <Col>
                        <img class="img-fluid rounded" src='https://images.unsplash.com/photo-1506784365847-bbad939e9335?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=868&q=80'/>
                    </Col>
                </Row>
            </div>
            <Container id="segundo">
                <h2>
                    Faça parte da IAgenda
                </h2>
                <p>
                    Você estará a um clique de seus compromissos, nunca irá se atrasar para aquela reunião importante
                </p>
            </Container>
            
            </div>
        </App>
    )

    }