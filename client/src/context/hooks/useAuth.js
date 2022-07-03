import React from "react";
import {Link} from "react-router-dom";
import history from "../../history";

function logout() {
    localStorage.removeItem('token');
    history.push('/login');
}

export default logout;