import React from "react";

import Container from '../components/Container'
import Footer from "../components/Footer";
import Header from "../components/Header";

const Publico = ( {children} ) => (
    <>
        <Header/>
        <Container>
            {children}
        </Container>
        <Footer/>
    </>

)

export default Publico