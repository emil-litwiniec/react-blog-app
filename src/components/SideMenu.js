import React, { Component } from "react";
import { connect } from "react-redux";

import { setDateFilter } from "../actions/filters";


class SideMenu extends Component {

    handleSetDateFilter = () => {
        this.props.setDateFilter({ month: 4, year: 2019 })
    }


    render() {
        return (
            <div>
                <a >2019</a>
                <button onClick={this.handleSetDateFilter}>April</button>
                <a>March</a>
                <a>February</a>
                <a>January</a>
                <a>2018</a>
                <a>December</a>
                <a>November</a>
                <a>October</a>
                <a>September</a>
                <a>July</a>
                <a>June</a>
            </div>
        )
    }
};


const mapDispatchToProps = (dispatch) => ({
    setDateFilter: filterDate => dispatch(setDateFilter(filterDate))
})


export default connect(undefined, mapDispatchToProps)(SideMenu);