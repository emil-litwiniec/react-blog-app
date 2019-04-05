import React, { Component } from "react";
import { connect } from "react-redux";
import PostForm from "./PostForm";
import { editPost } from "../actions/posts";

export class PostEditPage extends Component {
    onSubmit = (post) => {
        console.log('hello from onSubmit')
        this.props.editPost(this.props.post.id, post);
        this.props.history.push('/');
    }
    onAbort = () => {
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                {console.log(this.props)}
                <h2>Edit post</h2>
                <button>Login</button>
                <PostForm onSubmit={this.onSubmit} onAbort={this.onAbort} post={this.props.post} />

            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        post: state.posts.find(post => post.id === props.match.params.id)
    }
};

const mapDispatchToProps = (dispatch) => ({
    editPost: (id, post) => dispatch(editPost(id, post))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostEditPage);