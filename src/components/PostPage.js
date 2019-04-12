
import React, { Component } from 'react';
import { connect } from "react-redux";

import PublicMainHeader from "./public/PublicMainHeader";
import Post from "./Post";
import CommentsList from "./CommentsList";



const PostPage = (props) => {
    const paramsId = props.match.params.id;
    return (
        <div>
            <PublicMainHeader />
            <Post paramsId={paramsId} />
            <CommentsList postId={paramsId} />
        </div>
    )
}



export { PostPage as default };