import React from "react";
import PublicMainHeader from "./public/PublicMainHeader";
import PublicPostPreviewList from "./public/PublicPostPreviewList";
import SideMenu from "./SideMenu";




const MainFeedPage = () => {
    return (
        <div>
            <PublicMainHeader />
            <PublicPostPreviewList />
            <SideMenu />
        </div>
    )
}



export { MainFeedPage as default };