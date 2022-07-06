import App from '../../layouts/App';
import Button from 'react-bootstrap/Button';
import useAuth from '../../context/hooks/useAuth';
import React, { useState } from 'react';
import { useEffect } from 'react';
import Comp from './Card/comp';
import '../../estilos/agenda/comp.css'



export default function Agenda() {
    const [listAgenda, setListAgenda] = useState();
    const ax = useAuth().axios;
    useEffect(()=> {
        ax.then((response)=>{
            setListAgenda(response.data);
        })
    }, [])
    console.log(listAgenda)
    // const red = useAuth().callRegister;
    if(!localStorage.getItem('token')){
        return (
            <App>
                <div className="container bg-light">
                    <div className="col-md-12 text-center">
                        
                            <h1>Você precisa de uma conta</h1>
                            <h2>Faça login</h2>
                        
                    </div>
                </div>
            </App>
        )
    }else{
        return(
            
            <App>
                {typeof listAgenda !== "undefined" && localStorage.getItem("token")  && listAgenda.map((value) => {
                    if(localStorage.getItem("token") === value.token){
                        return( <Comp 
                            key={value.id} 
                            listCard={listAgenda} 
                            setListCard={setListAgenda}
                            
                            id={value.id}
                            compromisso={value.compromisso}
                            informacoes={value.informacoes}
                            date={value.date}
                            ></Comp>)
                    }
                    
                })}
            </App>
        )
    }
}