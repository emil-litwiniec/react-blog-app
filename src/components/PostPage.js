
import React, { Component } from 'react';
import { connect } from "react-redux";

import MainHeader from "./MainHeader";
import Post from "./Post";
import CommentsList from "./CommentsList";



const PostPage = (props) => {
    const paramsId = props.match.params.id;
    return (
        <div>
            <MainHeader />
            <Post paramsId={paramsId} />
            <p>Hello, this is post page!</p>
            <CommentsList postId={paramsId} />
        </div>
    )
}



export { PostPage as default };