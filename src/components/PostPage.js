
import React, { Component } from 'react';
import { connect } from "react-redux";

import MainHeader from "./MainHeader";
import Post from "./Post";



const PostPage = (props) => {
    const paramsId = props.match.params.id;
    return (
        <div>
            <MainHeader />
            <Post paramsId={paramsId} />
            <p>Hello, this is post page!</p>
            {/* >>>> COMMENT SECTION <<<< */}
        </div>
    )
}



export { PostPage as default };