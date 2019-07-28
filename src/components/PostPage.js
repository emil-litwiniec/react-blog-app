
import React from 'react';
import { connect } from "react-redux";

import { startSetPosts } from "../actions/posts";

import PublicMainHeader from "./public/PublicMainHeader";
import MainHeader from "./MainHeader";
import Post from "./Post";
import CommentsList from "./CommentsList";

const PostPage = ({ isAuthenticated, ...props }) => {

    const paramsId = props.match.params.id;

    return (

        <>

            <main className="main">
                {isAuthenticated ?
                    <MainHeader /> :
                    <PublicMainHeader />
                }

                <section className="post-container">
                    {!props.post ? <p>Loading</p> :
                        <>
                            <Post paramsId={paramsId} />
                            <CommentsList postId={paramsId} />
                        </>
                    }
                </section>

            </main>
        </>
    )
}

const mapStateToProps = (state, props) => {

    return {
        post: state.posts.find((item) => item.id === props.match.params.id),
        isAuthenticated: !!state.auth.uid

    };
};

const mapDispatchToProps = (dispatch) => ({
    startSetPosts: () => dispatch(startSetPosts())
})


export default connect(mapStateToProps, mapDispatchToProps)(PostPage);