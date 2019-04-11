import React from "react";
import PublicMainNavbar from "./PublicMainNavbar";
import { Link } from "react-router-dom";


const PublicMainHeader = () => {
    return (
        <header className="header">
            <div className="header__title-wrapper">

                <div className='header__title'>
                    <Link to="/" > <h1 className="text-header" >Blogster</h1></Link>
                </div>

            </div>
            <PublicMainNavbar />
        </header>
    )
}


export { PublicMainHeader as default };