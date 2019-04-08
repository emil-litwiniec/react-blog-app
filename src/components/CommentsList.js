import React, { Component } from "react";
import { connect } from "react-redux";

import { startAddComment } from '../actions/posts';
import Comment from "./Comment";
import AddComment from "./AddComment";
// import comments from "../tests/fixtures/comments";



class CommentsList extends Component {
    // constructor (props) {
    //     super(props);


    // }

    onSubmit = (comment) => {
        console.log("comment: ", comment);


        if (!this.props.post.comments) {
            this.props.startAddComment(this.props.post.id, { comments: [comment] })

            console.log('there are no comments')
        } else {

            console.log('there are some comments')
            console.log('there are some comments')
            this.props.startAddComment(this.props.post.id, { comments: [...this.props.post.comments, comment] });
        }



    }




    render() {
        return (
            <section>
                <h4>Leave a comment:</h4>
                <AddComment onSubmit={this.onSubmit} />
                {console.log("post from comments", this.props.post)}
                {this.props.post.comments && this.props.post.comments.map(comment => <Comment key={comment.id} postId={this.props.postId} {...comment} />)}
            </section>
        )
    }
};

/// 
const mapStateToProps = (state, props) => ({
    post: state.posts.find(post => post.id === props.postId)
})



const mapDispatchToProps = (dispatch) => ({
    startAddComment: (id, comment) => dispatch(startAddComment(id, comment))
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentsList);