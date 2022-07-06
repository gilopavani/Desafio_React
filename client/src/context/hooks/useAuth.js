import React from "react";
import {Link, useNavigate} from "react-router-dom";
import history from "../../history";
import { useState, useEffect } from "react";
import Axios from "axios";



export default function useAuth() {
    const axios = Axios.get("http://localhost:3001/agen_get");
    const [loading, setLoading] = useState(true);

    function logout() {
        localStorage.removeItem('token');
        history.push('/login');
    }
    let navigate  = useNavigate();
    
    function callRegister() {
        
        if(localStorage.getItem('token')){
            navigate("/", { replace: true });
        }else{
            navigate("/register", { replace: true });
        }
        
    }

    function handleClickLogin(values) {
        Axios.post("http://localhost:3001/login", {
            email: values.email,
            password: values.password,
        }).then((response) => {
            console.log(response);
            if(response.data.token){
                localStorage.setItem('token', response.data.token);
            }
            
            setLoading(true);
        });
        navigate("/", { replace: true });
    };
    useEffect(() => {
        setLoading(false);
    }, []);

    function handleClickNewRegister(values) {
        const token = localStorage.getItem('token')
        Axios.post("http://localhost:3001/reg_agenda", {
            compromisso: values.compromisso,
            informacoes: values.informacoes,
            date: values.date,
            token: token,    
                        
        }).then((response) => {
            console.log(response);
            setLoading(true);
        });
        navigate("/agenda", { replace: true });
    }

    return {logout , handleClickLogin, loading, callRegister, handleClickNewRegister, axios};
    
}

