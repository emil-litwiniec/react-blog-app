import React from "react";
import PublicMainHeader from "./public/PublicMainHeader";
import PublicPostPreviewList from "./public/PublicPostPreviewList";
import SideMenu from "./SideMenu";




const MainFeedPage = () => {
    return (
        <main className="main">
            <PublicMainHeader />
            <PublicPostPreviewList />
        </main>
    )
}



export { MainFeedPage as default };