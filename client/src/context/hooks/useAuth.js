import React from "react";
import {Link, useNavigate} from "react-router-dom";
import history from "../../history";
import { useState } from "react";
import Axios from "axios";

export default function useAuth() {

    function logout() {
        localStorage.removeItem('token');
        history.push('/login');
    }

    const [user, setUser] = useState();
    let navigate  = useNavigate();

    function handleClickLogin(values) {
        Axios.post("http://localhost:3001/login", {
            email: values.email,
            password: values.password,
        }).then((response) => {
            console.log(response);
            localStorage.setItem('token', response.data.token);
            setUser(response.data);
        });
        navigate("/", { replace: true });
    };

    return {logout , handleClickLogin};
    
}

