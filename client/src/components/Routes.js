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
import Agenda from "../pages/Agenda/Agenda";
import Compromisso from "../pages/Agenda/Compromisso";





export default function Rotas() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/about" element={<About/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="/agenda" element={<Agenda/>}/>
                <Route path="/agenda/novo" element={<Compromisso/>}/>

                {/* <CustomRoute isPrivate path="/0" element={<Home/>}/> */}
            </Routes>
        </BrowserRouter>

    )
    
}