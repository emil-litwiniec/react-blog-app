
import React from 'react';
import { connect } from "react-redux";

import { startSetPosts } from "../actions/posts";

import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';


import PublicMainHeader from "./public/PublicMainHeader";
import Post from "./Post";
import CommentsList from "./CommentsList";

const PostPage = (props) => {

    const paramsId = props.match.params.id;

    return (

        <>

            <main className="main">
                <PublicMainHeader />


                <section className="post-container">
                    {!props.post ? <p>Loading</p> :
                        <SimpleBar>
                            <Post paramsId={paramsId} />
                            <CommentsList postId={paramsId} />

                        </SimpleBar>
                    }
                </section>

            </main>
        </>
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