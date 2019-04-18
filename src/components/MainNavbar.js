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



    return (
        <nav className="private-header-navbar">
            <ul className="private-header-navbar__list">

                <div className="private-header-navbar__list-container">
                    <li className="private-header-navbar__list-node text-navbar-link" onClick={startLogout}>Logout</li>

                    <li className="private-header-navbar__list-node"><NavLink className="private-header-navbar__list-node text-navbar-link" to="/Create">Create</NavLink></li>
                    {/* <li className="header-navbar__list-node"><NavLink className="header-navbar__list-node text-navbar-link" to="/about">About</NavLink></li> */}
                </div>


                <form onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave} className="search-bar">
                    <input
                        className="private-search-bar__input"
                        onChange={handleSearch}
                        value={filters.text}
                        placeholder="Search posts"
                        type="text"
                    />
                    <img id="searchBarIcon" className="private-search-bar__icon" src="./images/search.svg" alt="Search icon" />
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