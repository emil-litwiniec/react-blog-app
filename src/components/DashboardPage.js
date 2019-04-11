import React from "react";
import MainHeader from "./MainHeader";
import PostPreviewList from "./PostPreviewList";
import SideMenu from "./SideMenu";
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";




const DashboardPage = ({ startLogout }) => {
    return (
        <main className="main">
            <button onClick={startLogout}>Logout</button>
            <MainHeader />
            <PostPreviewList />
        </main>
    )
}

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
})


export default connect(undefined, mapDispatchToProps)(DashboardPage);
