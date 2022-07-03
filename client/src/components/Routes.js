import React from "react";

import {
    BrowserRouter,
    Routes,
    Route,
    Link ,
} from 'react-router-dom'

import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/login";
import Register from "../pages/Register";

function CustomRoute(children) {
    // const token = localStorage.getItem('token');
    // console.log('ola')

    // if(isPrivate && !token){
    //     return <Link  to="/login"/>
    // }
    // return <Route {...rest}/>
    
}

export default function Rotas() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/about" element={<About/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </BrowserRouter>

    )
    
}