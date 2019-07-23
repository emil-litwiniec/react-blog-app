import React, { Component } from "react";
import { connect } from "react-redux";

import { startAddComment } from '../actions/posts';
import Comment from "./Comment";
import AddComment from "./AddComment";

class CommentsList extends Component {

    onSubmit = (comment) => {
        if (!this.props.post.comments) {
            this.props.startAddComment(this.props.post.id, { comments: [comment] })
        } else {
            this.props.startAddComment(this.props.post.id, { comments: [...this.props.post.comments, comment] });
        }
    }

    render() {
        return (
            <section className="comments">
                <h4 className="comments__header">Leave a comment</h4>
                <AddComment onSubmit={this.onSubmit} />
                {this.props.post.comments && this.props.post.comments.map(comment => <Comment key={comment.id} postId={this.props.postId} {...comment} />)}
            </section>
        )
    }
};


const mapStateToProps = (state, props) => ({
    post: state.posts.find(post => post.id === props.postId)
})



const mapDispatchToProps = (dispatch) => ({
    startAddComment: (id, comment) => dispatch(startAddComment(id, comment))
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentsList);