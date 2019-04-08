import React, { Component } from 'react';
import { connect } from "react-redux";

import PostForm from "./PostForm";
import { startCreatePost } from "../actions/posts";


export class PostCreatePage extends Component {
    onSubmit = post => {
        this.props.startCreatePost(post);
        this.props.history.push('/');
    };
    onAbort = () => {
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h2>Create a post</h2>
                <button>Login</button>
                <PostForm onSubmit={this.onSubmit} onAbort={this.onAbort} />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({

    startCreatePost: (post) => dispatch(startCreatePost(post))

});

export default connect(undefined, mapDispatchToProps)(PostCreatePage);










