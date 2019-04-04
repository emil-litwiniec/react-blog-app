import React from "react";
import MainHeader from "../components/MainHeader";
import PostPreviewList from "../components/PostPreviewList";
import SideMenu from "../components/SideMenu";




const MainFeedPage = () => {
    return (
        <div>
            <MainHeader />
            <PostPreviewList />
            <SideMenu />
        </div>
    )
}



export { MainFeedPage as default };