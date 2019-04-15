
import React, { useEffect } from 'react';
import { connect } from "react-redux";

import { startSetPosts } from "../actions/posts";

import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';


import PublicMainHeader from "./public/PublicMainHeader";
import Post from "./Post";
import CommentsList from "./CommentsList";

const PostPage = (props) => {
    useEffect(() => {
        // props.startSetPosts();
    });
    const paramsId = props.match.params.id;
    console.log(paramsId);
    console.log("props:: ", props)

    return (
        <main className="main">
            <PublicMainHeader />

            {!props.post ? <p>Loading</p> :
                <SimpleBar>
                    <Post paramsId={paramsId} />
                    {/* <CommentsList postId={paramsId} /> */}

                </SimpleBar>
            }

        </main>
    )
}

const mapStateToProps = (state, props) => {

    return {
        post: state.posts.find((item) => item.id === props.match.params.id)
    };
};

const mapDispatchToProps = (dispatch) => ({
    startSetPosts: () => dispatch(startSetPosts())
})


export default connect(mapStateToProps, mapDispatchToProps)(PostPage);