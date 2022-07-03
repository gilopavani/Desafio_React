import App from "../layouts/App";
import Button from 'react-bootstrap/Button';
import useAuth from "../context/hooks/useAuth";

export default function Agenda() {
    const red = useAuth().callRegister;
    if(!localStorage.getItem('token')){
        return (
            <App>
                <div class="container bg-light">
                    <div class="col-md-12 text-center">
                        
                            <h1>Você precisa de uma conta</h1>
                            <h2>Faça login</h2>
                        
                    </div>
                </div>
            </App>
        )
    }else{
        return(
            <App>
                
            </App>
        )
    }
}