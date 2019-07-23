import React from "react";
import MainNavbar from "../components/MainNavbar";
import { Link } from "react-router-dom";


const MainHeader = () => {
    return (
        <header className="private-header">
            <div className='private-header__title'>
                <Link to="/dashboard" > <h1 className="private-text-header" >Admin dashboard</h1></Link>
            </div>
            <MainNavbar />
        </header>
    )
}


export { MainHeader as default };