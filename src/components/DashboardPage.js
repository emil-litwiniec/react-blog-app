import React from "react";
import MainHeader from "./MainHeader";
import PostPreviewList from "./PostPreviewList";
import SideMenu from "./SideMenu";
import { connect } from "react-redux";




const DashboardPage = ({ startLogout }) => {
    return (

        <>
            <main className="main">
                <MainHeader />
                <PostPreviewList />
            </main>
            <SideMenu />
        </>
    )
}

const mapDispatchToProps = (dispatch) => ({
})


export default connect(undefined, mapDispatchToProps)(DashboardPage);
