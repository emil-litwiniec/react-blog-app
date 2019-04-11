import React, { Component } from "react";
import { connect } from "react-redux";

import { setDateFilter } from "../actions/filters";
import { giveArrayOfMonths } from "../utilities/utilites";



class SideMenu extends Component {

    // handleSetDateFilter = () => {
    //     const monthButton = document.getElementById(`${date[0]}-${date[1]}`)
    //     const month = monthButton.dataset.month;
    //     const year = monthButton.dataset.year;
    //     this.props.setDateFilter({ month, year })
    // }


    render() {
        const arrayOfMonths = giveArrayOfMonths(this.props.posts);

        return (
            <section className="side-menu">
                <ul className="side-menu__list">
                    <li className="side-menu__list-node" onClick={() => this.props.setDateFilter(null)}>See All Posts</li>
                    {this.props.posts &&
                        arrayOfMonths.map(date => {


                            return (<li
                                className="side-menu__list-node"
                                key={`${date[0]}-${date[1]}`}
                                data-month={date[0]}
                                data-year={date[1]}
                                onClick={() => this.props.setDateFilter({ month: date[0], year: date[1] })}
                            >{date[0]}</li>)
                        }
                        )}
                </ul>

            </section>
        )
    }
};


const mapDispatchToProps = (dispatch) => ({
    setDateFilter: filterDate => dispatch(setDateFilter(filterDate))
})

const mapStateToProps = (state) => ({
    posts: state.posts
})


export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);