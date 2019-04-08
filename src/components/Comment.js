import React, { useState } from "react";
import { connect } from "react-redux";

import { startAddCommentLike, startSubstractCommentLike } from '../actions/posts';



const Comment = ({ id, author, createdAt, text, likes, postId, comments, startAddCommentLike, startSubstractCommentLike }) => {
    const [isLiked, setIsLiked] = useState(false);
    const commentIndex = comments.findIndex(comment => comment.id === id);
    const handleAddLike = () => {
        setIsLiked(true);
        startAddCommentLike(postId, comments[commentIndex], commentIndex);
    }
    const handleSubstractLike = () => {
        setIsLiked(false);
        startSubstractCommentLike(postId, comments[commentIndex], commentIndex);
    }
    return (
        <div>
            <img src="" alt="Avatar" />
            <div>
                <h4>{author}</h4>
                <p>{createdAt}</p>
                <p>{text}</p>
                <p>{likes}</p>

                {isLiked ?
                    <button onClick={handleSubstractLike} >Unlike</button>
                    :
                    <button onClick={handleAddLike}>Like</button>
                }
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    startAddCommentLike: (id, comment, commentIndex) => dispatch(startAddCommentLike(id, comment, commentIndex)),
    startSubstractCommentLike: (id, comment, commentIndex) => dispatch(startSubstractCommentLike(id, comment, commentIndex))
});

const mapStateToProps = (state, props) => ({
    comments: state.posts.find(post => post.id === props.postId).comments
})


export default connect(mapStateToProps, mapDispatchToProps)(Comment);
