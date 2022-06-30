import React from "react";

import Container from '../components/Container'
import Footer from "../components/Footer";
import Header from "../components/Header";

const App = ( {children} ) => (
    <>
        <Header/>
        <Container>
            {children}
        </Container>
        <Footer/>
    </>

)

export default App