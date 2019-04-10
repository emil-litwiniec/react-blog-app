import React from 'react';
import { connect } from "react-redux";

import PostPreview from "./PostPreview";

import selectPosts from "../selectors/posts";




const PostPreviewList = (props) => {
    console.log(props.posts);
    return (
        <div>
            <p>Something...</p>
            {props.posts.map((post) => <PostPreview key={post.id} {...post} />)}
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        posts: selectPosts(state.posts, state.filters)
    }
}


export default connect(mapStateToProps)(PostPreviewList);