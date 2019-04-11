import React from 'react';
import { connect } from "react-redux";

import PostPreview from "./PostPreview";

import selectPosts from "../selectors/posts";




const PostPreviewList = (props) => {
    return (
        <section className="post-preview-list">
            {props.posts.map((post) => <PostPreview key={post.id} {...post} />)}
        </section>
    )
}


const mapStateToProps = (state) => {
    return {
        posts: selectPosts(state.posts, state.filters)
    }
}


export default connect(mapStateToProps)(PostPreviewList);