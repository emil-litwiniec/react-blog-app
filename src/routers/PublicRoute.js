import React from "react";

import { connect } from "react-redux";

import { Route } from "react-router-dom";
import SideMenu from "../components/SideMenu";

export const PublicRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => (
        <Route
            {...rest}
            component={props =>

                <>
                    <Component {...props} />

                    {props.match.path !== "/post/:id" ?
                        <SideMenu /> : false}
                    <div className="side-left"></div>
                    <div className="side-right"></div>

                </>

            }
        />
    );

const mapStateToProps = state => ({
    isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute);
