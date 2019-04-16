import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import { setTextFilter } from "../actions/filters";
import { startLogout } from "../actions/auth";




const MainNavbar = ({ setTextFilter, filters, startLogout, match }) => {

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

    const regex = /post/gm;

    const URL = document.URL;

    let isNotPost = URL.search(regex);


    console.log('isNotPost');

    return (
        <nav className="header-navbar">
            <ul className="header-navbar__list">

                <div className="header-navbar__list-container">
                    <li className="header-navbar__list-node text-navbar-link" onClick={startLogout}>Logout</li>

                    <li className="header-navbar__list-node"><NavLink className="header-navbar__list-node text-navbar-link" to="/Create">Create</NavLink></li>
                    {/* <li className="header-navbar__list-node"><NavLink className="header-navbar__list-node text-navbar-link" to="/about">About</NavLink></li> */}
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
    startLogout: () => dispatch(startLogout())

});

const mapStateToProps = (state) => ({
    filters: state.filters
})


export default connect(mapStateToProps, mapDispatchToProps)(MainNavbar);