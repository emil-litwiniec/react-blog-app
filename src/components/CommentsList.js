import React, { Component } from "react";
import { connect } from "react-redux";

import { addComment } from '../actions/posts';
import Comment from "./Comment";
import AddComment from "./AddComment";
// import comments from "../tests/fixtures/comments";



class CommentsList extends Component {
    // constructor (props) {
    //     super(props);


    // }

    onSubmit = (comment) => {
        console.log("comment: ", comment);
        this.props.addComment(this.props.post.id, { comments: [...this.props.post.comments, comment] });
    }




    render() {
        return (
            <section>
                <h4>Leave a comment:</h4>
                <AddComment onSubmit={this.onSubmit} />
                {this.props.post.comments.map(comment => <Comment key={comment.id} postId={this.props.postId} {...comment} />)}
            </section>
        )
    }
};

const mapStateToProps = (state, props) => ({
    post: state.posts.find(post => post.id === props.postId)
})



const mapDispatchToProps = (dispatch) => ({
    addComment: (id, comment) => dispatch(addComment(id, comment))
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentsList);