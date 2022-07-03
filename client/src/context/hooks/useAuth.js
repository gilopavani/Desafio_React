import React from "react";
import {Link, useNavigate} from "react-router-dom";
import history from "../../history";
import { useState, useEffect } from "react";
import Axios from "axios";

export default function useAuth() {
    const [loading, setLoading] = useState(true);

    function logout() {
        localStorage.removeItem('token');
        history.push('/login');
    }
    let navigate  = useNavigate();
    
    

    function handleClickLogin(values) {
        Axios.post("http://localhost:3001/login", {
            email: values.email,
            password: values.password,
        }).then((response) => {
            console.log(response);
            localStorage.setItem('token', response.data.token);
            setLoading(true);
        });
        navigate("/", { replace: true });
    };
    useEffect(() => {
        setLoading(false);
    }, []);

    return {logout , handleClickLogin, loading};
    
}

