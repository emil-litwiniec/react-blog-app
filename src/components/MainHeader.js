import React from "react";
import MainNavbar from "../components/MainNavbar";
import { Link } from "react-router-dom";


const MainHeader = () => {
    return (
        <div>
            <Link to="/" > <h1>Blogster</h1></Link>
            <MainNavbar />
        </div>
    )
}


export { MainHeader as default };