/* eslint-disable jsx-a11y/alt-text */
import React, {useContext} from "react";
import { Row, Col } from "reactstrap";
import App from "../layouts/App";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import useAuth from "../context/hooks/useAuth";

// import Image from 'react-bootstrap/Image'
import '../estilos/Home.css'



export default function Home() {
    const register = useAuth().callRegister;
    
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
                        <Button variant="light" size="lg" id="button" onClick={register}>Registre-se</Button>


                        <div id="separeted">
                            <h2>
                                Faça parte da IAgenda
                            </h2>
                            <p>
                                Você estará a um clique de seus compromissos, nunca irá se atrasar para aquela reunião importante
                            </p>
                        </div>
                        
                    </Col>
                    <Col>
                        <img class="img-fluid rounded" src='https://img.freepik.com/psd-premium/plano-maqueta-calendario-recortado-maqueta_23-2148222025.jpg?w=740'/>
                    </Col>
                </Row>
            </div>
            <Container id="segundo">
                
            </Container>
            
            </div>
        </App>
    )

    }