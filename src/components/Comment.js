import React, { useState } from "react";
import { connect } from "react-redux";

import { addCommentLike } from '../actions/posts';



const Comment = ({ id, author, createdAt, text, likes, postId, comments, addCommentLike }) => {
    const [isClicked, setIsClicked] = useState(false);
    console.log(comments);
    const handleLike = () => {
        setIsClicked(true);
        addCommentLike(postId, id);
    }
    return (
        <div>
            <img src="" alt="Avatar" />
            <div>
                <h4>{author}</h4>
                <p>{createdAt}</p>
                <p>{text}</p>
                <button onClick={handleLike} disabled={isClicked}>Like</button>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addCommentLike: (id, commentID) => dispatch(addCommentLike(id, commentID))
});

const mapStateToProps = (state, props) => ({
    comments: state.posts.find(post => post.id === props.postId).comments
})


export default connect(mapStateToProps, mapDispatchToProps)(Comment);
