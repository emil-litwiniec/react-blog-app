import React, { Component } from "react";
import { connect } from "react-redux";
import PostForm from "./PostForm";
import { startEditPost } from "../actions/posts";

import SimpleBar from 'simplebar-react';

import 'simplebar/dist/simplebar.min.css';

export class PostEditPage extends Component {
    onSubmit = (post) => {
        this.props.startEditPost(this.props.post.id, post);
        this.props.history.push('/dashboard');
    }
    onAbort = () => {
        this.props.history.push('/dashboard');
    }
    render() {
        return (


            <SimpleBar>
                <div className="create-post">
                    <header className="create-post__header">
                        <h2 className="create-post__title" >Edit post</h2>
                    </header>
                    <PostForm onSubmit={this.onSubmit} onAbort={this.onAbort} post={this.props.post} />

                </div>
            </SimpleBar>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        post: state.posts.find(post => post.id === props.match.params.id)
    }
};

const mapDispatchToProps = (dispatch) => ({
    startEditPost: (id, post) => dispatch(startEditPost(id, post))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostEditPage);