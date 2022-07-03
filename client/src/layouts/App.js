import React, {useContext} from "react";
import { Context } from "../context/hooks/context";
import Container from '../components/Container'
import Footer from "../components/Footer";
import Header from "../components/Header";
import { AuthProvider } from "../context/hooks/context";

function Load({children}) {
    const loading= useContext(Context);
    if (loading) {
        return <h1>Loading...</h1>;
    }
    console.log(loading);
    return children;
}



export default function App( {children} ){
    return (
        <Load>
            <AuthProvider>
                <>
                    <Header/>
                        <Container>
                            {children}
                        </Container>
                    <Footer/>
                </>
            </AuthProvider>
        </Load>
    )
    
    

}