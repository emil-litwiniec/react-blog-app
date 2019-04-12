import React from "react";
import { connect } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";


import { startLogin } from "../../actions/auth";

import { setTextFilter } from "../../actions/filters";



const PublicMainNavbar = ({ setTextFilter, filters, startLogin, isAuthenticated, history }) => {

    const handleSearch = (e) => {
        setTextFilter(e.target.value)
    }

    const handleMouseEnter = () => {
        const searchIcon = document.getElementById('searchBarIcon');

        searchIcon.style.opacity = ".8";

    }

    const handleMouseLeave = () => {
        const searchIcon = document.getElementById('searchBarIcon');

        searchIcon.style.opacity = ".4";

    }




    return (
        <nav className="header-navbar">
            <ul className="header-navbar__list">

                <div className="header-navbar__list-container">
                    <li className="header-navbar__list-node text-navbar-link" onClick={startLogin}>Login</li>
                    <li className="header-navbar__list-node"><NavLink className="header-navbar__list-node text-navbar-link" to="/about">About</NavLink></li>
                </div>


                <form onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave} className="search-bar">
                    <input
                        className="search-bar__input"
                        onChange={handleSearch}
                        value={filters.text}
                        placeholder="Search posts"
                        type="text"
                    />
                    <img id="searchBarIcon" className="search-bar__icon" src="./images/search.svg" alt="Search icon" />
                </form>

            </ul>
        </nav>
    )
}


const mapDispatchToProps = (dispatch) => ({
    setTextFilter: text => dispatch(setTextFilter(text)),
    startLogin: () => dispatch(startLogin()),
    login: uid => dispatch(login(uid)),
    logout: () => dispatch(logout())
});

const mapStateToProps = (state) => ({
    filters: state.filters,
    isAuthenticated: !!state.auth.uid


})


export default connect(mapStateToProps, mapDispatchToProps)(PublicMainNavbar);

