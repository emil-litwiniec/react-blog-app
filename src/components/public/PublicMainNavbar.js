import React from "react";
import { connect } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";


import { startLogin } from "../../actions/auth";

import { setTextFilter } from "../../actions/filters";



const PublicMainNavbar = ({ setTextFilter, filters, startLogin, isAuthenticated, history }) => {

    const handleSearch = (e) => {
        setTextFilter(e.target.value)
    }




    return (
        <nav className="header-navbar">
            <ul className="header-navbar__list">
                <li className="header-navbar__list-node text-navbar-link" onClick={startLogin}>Login</li>
                {/* <li><NavLink to='/dashboard' onClick={handleStartLogin}>Login</NavLink></li> */}
                <li className="header-navbar__list-node"><NavLink className="header-navbar__list-node text-navbar-link" to="/about">About</NavLink></li>
                <li className="header-navbar__list-node"><NavLink className="header-navbar__list-node text-navbar-link" to="/charity">Charity</NavLink></li>
                <li className="header-navbar__list-node"><NavLink className="header-navbar__list-node text-navbar-link" to="/tags">Tags</NavLink></li>

                <input
                    onChange={handleSearch}
                    value={filters.text}
                    placeholder="Search posts"
                    type="text"
                />


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

