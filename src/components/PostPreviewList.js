import React from 'react';
import { connect } from "react-redux";

import PostPreview from "./PostPreview";

import selectPosts from "../selectors/posts";

import SimpleBar from 'simplebar-react';

import 'simplebar/dist/simplebar.min.css';


const PostPreviewList = (props) => {
    return (
        <section className="post-preview-list">
            <SimpleBar>
                {props.posts.map((post) => <PostPreview key={post.id} {...post} />)}
            </SimpleBar>
        </section>
    )
}


const mapStateToProps = (state) => {
    return {
        posts: selectPosts(state.posts, state.filters)
    }
}


export default connect(mapStateToProps)(PostPreviewList);