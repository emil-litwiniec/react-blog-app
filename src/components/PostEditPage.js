import React, { Component } from "react";
import { connect } from "react-redux";
import PostForm from "./PostForm";
import { startEditPost } from "../actions/posts";

export class PostEditPage extends Component {
    onSubmit = (post) => {
        console.log('hello from onSubmit')
        this.props.startEditPost(this.props.post.id, post);
        this.props.history.push('/');
    }
    onAbort = () => {
        this.props.history.push('/');
    }
    render() {
        return (


            <div className="create-post">

                <header className="create-post__header">
                    <h2 className="create-post__title" >Edit post</h2>
                    {/* <button className="button create-post__button">Login</button> */}
                </header>
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
    startEditPost: (id, post) => dispatch(startEditPost(id, post))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostEditPage);