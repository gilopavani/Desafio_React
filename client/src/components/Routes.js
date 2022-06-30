import React from "react";

import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom'

import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/login";
import Register from "../pages/Register";

const Rotas = () => (

    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
        </Routes>
    </BrowserRouter>

)

export default Rotas