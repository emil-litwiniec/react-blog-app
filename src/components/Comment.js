import React, { useState } from "react";
import { connect } from "react-redux";

import { addCommentLike, substractCommentLike } from '../actions/posts';



const Comment = ({ id, author, createdAt, text, likes, postId, comments, addCommentLike, substractCommentLike }) => {
    const [isLiked, setIsLiked] = useState(false);
    console.log(comments);
    const handleAddLike = () => {
        setIsLiked(true);
        addCommentLike(postId, id);
    }
    const handleSubstractLike = () => {
        setIsLiked(false);
        substractCommentLike(postId, id);
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
    addCommentLike: (id, commentID) => dispatch(addCommentLike(id, commentID)),
    substractCommentLike: (id, commentID) => dispatch(substractCommentLike(id, commentID))
});

const mapStateToProps = (state, props) => ({
    comments: state.posts.find(post => post.id === props.postId).comments
})


export default connect(mapStateToProps, mapDispatchToProps)(Comment);
