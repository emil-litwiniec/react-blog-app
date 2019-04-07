import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import { setTextFilter } from "../actions/filters";



const MainNavbar = ({ setTextFilter, filters }) => {

    const handleSearch = (e) => {
        setTextFilter(e.target.value)
    }

    return (
        <nav>
            <ul>
                <li><NavLink to="/create">Create</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/charity">Charity</NavLink></li>
                <li><NavLink to="/tags">Tags</NavLink></li>

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
    setTextFilter: text => dispatch(setTextFilter(text))
});

const mapStateToProps = (state) => ({
    filters: state.filters
})


export default connect(mapStateToProps, mapDispatchToProps)(MainNavbar);