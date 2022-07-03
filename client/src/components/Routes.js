import React , { useContext }from "react";
import { Context } from "../context/hooks/context";

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





export default function Rotas() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/about" element={<About/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/" element={<Home/>}/>
                {/* <CustomRoute isPrivate path="/0" element={<Home/>}/> */}
            </Routes>
        </BrowserRouter>

    )
    
}