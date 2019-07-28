import React from "react";
import { connect } from "react-redux";

import { startLogin } from "../../actions/auth";

import { setTextFilter } from "../../actions/filters";



const PublicMainNavbar = ({ setTextFilter, filters, startLogin }) => {

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
    const URL = document.URL;
    const regex = /post/gm;
    const isPostPage = URL.search(regex) === -1 ? false : true;




    return (
        <nav className="header-navbar">
            <div className="header-navbar__list">

                <ul className="header-navbar__list-container">
                    <li className="header-navbar__list-node text-navbar-link" onClick={startLogin}>Login</li>
                </ul>

                {!isPostPage &&
                    <form onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave} className="search-bar">
                        <input
                            className="search-bar__input"
                            onChange={handleSearch}
                            value={filters.text}div
                            placeholder="Search posts"
                            type="text"
                            name="Search input"
                        />
                        <img id="searchBarIcon" className="search-bar__icon" src="./images/search.svg" alt="Search icon" />
                    </form>
                }

            </div>
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

