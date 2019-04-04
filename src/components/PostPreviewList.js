import React from 'react';
import { connect } from "react-redux";

import PostPreview from "../components/PostPreview";




const PostPreviewList = (props) => {
    console.log(props.posts);
    return (
        <div>
            <p>SSomething...</p>
            {props.posts.map((post) => <PostPreview key={post.id} {...post} />)}
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(PostPreviewList);