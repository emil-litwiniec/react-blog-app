import React from "react";
import MainHeader from "./MainHeader";
import PostPreviewList from "./PostPreviewList";
import SideMenu from "./SideMenu";


const DashboardPage = () => {
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


export default DashboardPage;
