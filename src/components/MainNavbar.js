import React from "react";
import { NavLink } from "react-router-dom";

const MainNavbar = () => {
    return (
        <nav>
            <ul>
                <li><NavLink to="/fav">Favourite</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/charity">Charity</NavLink></li>
                <li><NavLink to="/tags">Tags</NavLink></li>
                <form action="">
                    <input type="text" />
                    <button type="submit">Search</button>
                </form>
            </ul>
        </nav>
    )
}



export { MainNavbar as default };