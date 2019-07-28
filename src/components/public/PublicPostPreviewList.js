import React from 'react';
import { connect } from "react-redux";

import PublicPostPreview from "./PublicPostPreview";

import selectPosts from "../../selectors/posts";

const PublicPostPreviewList = (props) => {


    return (
        <section className="post-preview-list">
                {props.posts.map((post) => <PublicPostPreview key={post.id} {...post} />)}
        </section>
    )
}


const mapStateToProps = (state) => {
    return {
        posts: selectPosts(state.posts, state.filters)
    }
}


export default connect(mapStateToProps)(PublicPostPreviewList);